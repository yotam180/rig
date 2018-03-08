/*
Some utility methods
*/

/*
Checks if a number is a valid float for the rig compiler to understand.
Valid float examples:
5
5.5
5.58
5. (=5)
.5 (=0.5)
*/
function isNum(x) {
    return x != "" && x.match(/^(\d*)(\.)?(\d*)$/)
}

/*
For formatting a string with embedded values
Constructor values:
    str - the string, masked with %0, %1, %2,... as placeholders for the values
    defaults - dictionary or array, which defaults[0] is the value for %0 if the parameter
               is falsy. defaults[1] for %1, etc...
*/
var StringFormatter = function(str, defaults = {}) {
    var pattern = str;
    var placeholders = defaults;

    var exec = function(values) {
        return pattern(window.rig, values);
    }

    this.format = function(values = []) {
        if (pattern.constructor.name == "Function") {
            return exec(values);
        }
        var s = pattern;
        for (var i = 0; i < values.length; i++) {
            s = s.replace(new RegExp("\\%" + i), values[i] || placeholders[i]);
        }
        return s;
    }
};

var Documentation = function(title, type, description, args, example) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.arguments = args;
    this.example = example;
};

Documentation.ElementWise = 0x0010
Documentation.StackWise = 0x0020
Documentation.StackSafe = 0x0030
Documentation.TopWise = 0x0040
Documentation.TopSafe = 0x0050

Documentation.Statement = 0x0001
Documentation.Expression = 0x0002

/*
An expression class to describe an expression.
Constructor parameters:
    children - an array of expression children
    format -receives  an array of expressions (the children) and returns a formatted string of the expression (including the subexpressions).
*/
var Expression = function(_note, _children, _format, _doc) {
    this.note = _note;
    this.format = _format;
    this.children = _children;
    this.documentation = _doc;
};

var LiteralExpression = function(value) {
    return new Expression("LITERAL", [], new StringFormatter(value));
};

Expression.NO_LITERALS = 0b01;
Expression.OPTIONAL = 0b10;
Expression.ANY = 0b00;

var EmptyStreamException = function(_stream) {
    this.stream = _stream;
};

var NoteNotInLexiconException = function(_note) {
    this.note = _note;
}

/*
A stream class to represent a string reading stream.
*/
var Stream = function(_body) {
    var body = _body.split("");

    /*
    Reads one character from the stream.
    */
    this.read = function() {
        if (body.length == 0) {
            throw new EmptyStreamException(this);
        }

        return body.shift();
    };

    /*
    Reads the first character without removing it from the stream.
    */
    this.peek = function() {
        return body.length ? body[0] : null;
    };

    /*
    Gets a char and inserts it to the beginning of the string.
    */
    this.unread = function(r) {
        body.unshift(r);
    };

    this.is_empty = function() {
        return !body.length;
    };

    /*
    String representation of the stream.
    */
    this.toString = function() {
        return body.join("");
    };

    this.getstr = function() {
        return body;
    }
};

/*
An object that reads from a stream.
Constructor parameters:
    _stream - the stream to read from
    // _statements - a dictionary<String, Expression> that represents the statements of the language.
    // _expressions - a dictionary<String, Expression> that represents the non-statement expressions of the language.
*/
var StreamParser = function(_stream) {
    var stream = _stream;

    /*
    Checking that our stream is not empty.
    */
    if (stream.is_empty()) {
        throw new EmptyStreamException(stream);
    }

    /*
    Attempts to retrieve the next token from the stream.
    Parameters:
        opts - option flags (Can be Expression.NO_LITERALS and/or Expression.OPTIONAL)
        lexicon - a dictionary<String, Expression> that represents the language.
    Return value:
        Expression - the first matching expression for the tokens, or a literal expression
                     if a literal was found.
    */
    this.next_token = function(opts, lexicon) {
        // "Parsing" the options flags
        var accept_literals = !(opts & Expression.NO_LITERALS);
        var optional = opts & Expression.OPTIONAL;

        // Getting rid of whitespaces
        if (optional) {
            if (stream.peek() == " ") {
                return null;
            }
        }
        else {
            while (stream.peek() == " ") {
                stream.read();
            }
        }   

        var note = "";
        var expression_found = null;
        var is_num = false;

        // Taking inputs until we find someting (which we take care of inside the loop)
        while (true) {
            // Checking if we are done
            if (stream.is_empty()) {
                // If a literal is allowed and we found a literal
                // we return a LiteralExpression.
                if (accept_literals && isNum(note)) {
                    return new LiteralExpression(note);
                }
                // If the note is optional, we can just give up on it.
                else {
                    return null;
                }
            }

            // Otherwise we want to take an element (even if it triggers
            // an EmptyStreamException)
            note += stream.read();

            // Did we find anything?
            expression_found = lexicon.hasOwnProperty(note);

            // If we have a number, we continue to query digits.
            if (accept_literals && isNum(note)) {
                is_num = true;
                continue;
            }

            // If we had a valid number but just got a wrong char,
            // we unread it back to the stream and return the number
            // we read as a LiteralExpression
            if (accept_literals && is_num) {
                if (note[note.length - 1] != " " || !isNum(stream.peek())) {
                    stream.unread(note[note.length - 1]);
                }
                return new LiteralExpression(note.substr(0, note.length - 1));
            }

            // If nothing matches the lexicon, we don't have any chance of finding 
            // a correct note. So we have to throw an exception.
            if (!expression_found) {
                if (optional) {
                    while (note.length) {
                        stream.unread(note[note.length - 1]);
                        note = note.substr(0, note.length - 1);
                    }
                    return null;
                }

                // If the argument is required, we throw exceptions.
                throw new NoteNotInLexiconException(note);
            }

            if (!lexicon[note]) {
                continue;
            }

            return lexicon[note];
        }
    };

    this.done = function() {
        return stream.is_empty();
    }
};

/*
For parsing complete language code.
*/
var LanguageParser = function(code, statements, expressions) {
    var stream = new Stream(code);
    var sp = new StreamParser(stream);
    var stmt = statements;
    var exps = expressions;

    function build_expression_tree(opts) {
        // Reading an expression from the stream
        var exp = sp.next_token(opts, exps);

        if (!exp) {
            return null;
        }

        // Recursively executing all child expressions.
        var children = exp.children.map(x => build_expression_tree(x));

        // Formatting the expression using its formatted children
        return exp.format.format(children);
    };

    this.expression_tree = function() {
        var stm = sp.next_token(Expression.ANY, stmt);

        if (stm.note == "LITERAL") {
            return "stack.push(" + stm.format.format() + ");";
        }

        var children = stm.children.map(x => build_expression_tree(x));

        return stm.format.format(children);
    };

    this.done = function() {
        return sp.done();
    }
};

var RIGCompiler = function() {

    this.indents = [];
    this.output_code = "";
    
    this.LRR = "AX";

    this.statements = {};
    this.expressions = {};

    function generate_stack_args(args) {
        var stack = [];
        for (var i = 0; i < args.length; i++) {
            if (args[i] || args[i] == "0" || args[i] == 0) {
                try {
                    stack.push(eval(args[i]));
                }
                catch (err) {
                    stack.push(args[i]);
                }
            }
        }
        if (stack.length == 1 && stack[0] == null) {
            return "[]";
        }
        return JSON.stringify(stack);
    }

    this.app = function(line) {
        this.output_code += Array(this.indents.length + 1).join("\t") + line + "\n";
    };
	
	/*
	Compiles RIG code into Javascript code, with the arguments hard-coded into the stack.
	Parameters:
		code - the RIG code as a string
		args - array of values (preferrably strings or numbers)
	Return value:
		String - the ready JS code to be executed.
	*/
    this.compile = function(code, args) {
        
        this.indents = [];
        this.LRR = "AX";
        this.output_code = 
            `var AX = 0, BX = 1, CX = -1, DX = 2, IX = 0, JX = 10, KX = 0;\n` +
            `var stack = ` + generate_stack_args(args) + `;\n\n`;

        var lp = new LanguageParser(code, this.statements, this.expressions);

        while (!lp.done()) {
            var stmt = lp.expression_tree();
            this.app(stmt);
        }

        this.output_code += `stack`;
        return this.output_code;
    };

    var tokens = {
        parallel: "∥",        
        lambda: "λ",
        sub0: "₀",
        sub1: "₁",
        sub2: "₂",
        sup2: "²",
        dupl: "↗",
        del: "←",
        dup: "→",
        pi: "π"        
    };

    /*
    Tokenizes the code
    */
    this.preprocess = function(code) {
        for (var i in tokens) if (tokens.hasOwnProperty(i)) {
            code = code.replace(new RegExp("\\\\" + i, "g"), tokens[i]);
        }
        return code;
    }

};

var rig = new RIGCompiler();