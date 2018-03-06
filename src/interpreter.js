var Err = {
	END_OF_CODE: 0x01,
	INVALID_NOTE: 0x02
}

var RIG = function() {

	var src_code = [];
	var prod_code = "";
	var indent_level = 1;
	var LRR = "AX";
	var self = this;

	var registers = {
		"a": "AX",
		"b": "BX",
		"c": "CX",
		"d": "DX",
		"i": "IX",
		"j": "JX",
		"k": "KX"
	};
		
	/*
	Decalls the element (returns the function whose return value is the parameter)
	*/
	var expr = function(x) {
		return () => x;
	};
	
	/*
	Functions that generate code!
	*/
	var code_generators = {
		"E": -1,
		"t": -1,
		"T": -1,
		"s": -1,
		"S": -1,

		/*
		Add(a = 1)
		Adds parameter A to all elements in the stack.
		*/
		"+": function() {
			var a = self.try_take(expressions) || expr(1);

			return `stack = stack.map(x => x + ` + a() + `);`;
		},

		/*
		Accumulate()
		Accumulates the stack stack-wise
		*/
		"s+": function() {
			return `stack = [stack.reduce((x, y) => x + y)];`;
		},

		/*
		Stack-safe Accumulate()
		Accumulates the stack stack-safe
		*/
		"S+": function() {
			return `stack.push(stack.reduce((x, y) => x + y));`;
		}
	};

	/*
	Non full-line expressions (code without semicolons).
	*/
	var expressions = {
		/*
		Adds two expressions
		*/
		"+": function() {
			var a = self.take(expressions);
			if (is_err(a)) {
				return a;
			}
			a = a();

			var b = self.try_take(expressions) || expr(1);
			b = b();

			return "((" + a + ") + (" + b + "))";
		}
	};

	/*
	Parses the arguments into a stack constructor expression for compilation.
	Parameters:
		args - array of strings representing the arguments to the program.
	Return value:
		String - the code that constructs the stack according to the parameters.
	*/
	var get_args_stack = function(args) {
		stack = [];
		for (var i = 0; i < args.length; i++) {
			try {
				stack.push(eval(args[i]));
			}
			catch (err) {
				stack.push(args[i]);
			}
		}
		return "var stack = " + JSON.stringify(stack) + ";";
	};

	/*
	Defines the base code for the program (creates the registers, alternative stack, etc).
	*/
	var get_base_code = function() {
		return `var AX = 0, BX = 1, CX = -1, DX = 2, IX = 0, JX = 0, KX = 0;`;
	};


	/*
	Appends a line of code to the output code.
	*/
	var app = function(line) {
		prod_code += Array(indent_level).join("\t") + line + "\n";
	};

	/*
	Checks if a number is a valid float for rig compilers to understand.
	Valid float examples:
	5
	5.5
	5.58
	5. (=5)
	.5 (=0.5)
	*/
	function isNum(x) {
		return x != "" && x.match(/^(\d*)(\.)?(\d+)?$/);
	}

	function is_err(x) {
		return x.constructor.name == "Array" && x.length == 2 && x[0].constructor.name == "Number" && x[1].constructor.name == "String";
	}

	/*
	Takes the next acceptable element, according to a given set of elements that can be taken.
	Parameters:
		handles - can be an array with acceptable input names, or a dictionary which's keys are the acceptable input names.
	Return value:
		The code generator matching the received element.
	*/
	this.take = function(handles, literals_allowed = true) {

		while (src_code[0] == " ") {
			src_code.shift();
		}

		if (!literals_allowed) {
			return this.take_no_literal(handles);
		}

		var el = "";
		var handle_found = null;
		var is_num = false;

		// We take characters until a handle is found.
		while (true) {
			// Checking for end of input (guard block)
			if (src_code.length == 0) {
				if (isNum(el)) {
					// Returning a handle that will yield the number
					return expr(el);
				}

				return [Err.END_OF_CODE, el];
			}

			// Taking the next element of the array
			el += src_code.shift();


			// Looking for a handle
			if (handles.constructor.name == "Array") {
				handle_found = ~handles.indexOf(el) ? 1 : 0; // 1 - found in array, 0 - not found in array
			}
			else if (handles.constructor.name == "Object") {
				handle_found = handles.hasOwnProperty(el) ? 3 : 2; // 3 - found in dict, 2 - not found in dict
			}

			// If we have a valid number, continue taking inputs.
			// We add "0" to the test because we want "15." to pass isNaN (it is a beginning of a decimal)
			if (isNum(el)) {
				is_num = true;
				continue;
			}

			// If we had a valid number but just got a wrong char,
			// we unshift it back into the source code and return the number.
			if (is_num) {
				src_code.unshift(el[el.length - 1]);
				return expr(el.substr(0, el.length - 1));
			}
			is_num = false;

			if (handle_found == 0) {
				continue;
			}
			else if (handle_found == 1) {
				return el;
			}
			else if (handle_found == 2) {
				return [Err.INVALID_NOTE, el];
			}
			else if (handles[el] == -1) {
				continue;
			}
			else {
				return handles[el];
			}
		}
	};

	this.take_no_literal = function(handles) {
		var el = "";
		var handle_found = null;

		// We take characters until a handle is found.
		while (true) {
			// Checking for end of input (guard block)
			if (src_code.length == 0) {
				return [Err.END_OF_CODE, el];
			}

			// Taking the next element of the array
			el += src_code.shift();

			// Looking for a handle
			if (handles.constructor.name == "Array") {
				handle_found = ~handles.indexOf(el) ? 1 : 0; // 1 - found in array, 0 - not found in array
			}
			else if (handles.constructor.name == "Object") {
				handle_found = handles.hasOwnProperty(el) ? 3 : 2; // 3 - found in dict, 2 - not found in dict
			}

			if (handle_found == 0) {
				continue;
			}
			else if (handle_found == 1) {
				return el;
			}
			else if (handle_found == 2) {
				return [Err.INVALID_NOTE, el];
			}
			else if (handles[el] == -1) {
				continue;
			}
			else {
				return handles[el];
			}
		}
	};

	this.try_take = function(handles, literals_allowed = true) {
		var el = this.take(handles, literals_allowed);
		
		if (is_err(el)) {
			// Inserting the taken nodes back to the source code to read them again later.
			var txt = el[1].split("");
			while (txt.length) {
				src_code.unshift(txt.pop());
			}

			return null;
		}

		// If everything is alright we return el.
		return el;
	};

	/*
	Begins a new compilation cycle with code.
	*/
	this.init = function(code) {
		prod_code = "";
		indent_level = 1;
		LRR = "AX";
		src_code = code.split("");
	}

	/*
	Execute a code section.
	Parameters:
		args - the list of arguments. They will be initially pushed to the stack.
	Return value:
		String - the compiled javascript code that can be run.
	*/
	this.compile = function(args) {
		// Writing the base code.
		app(get_base_code());
		app(get_args_stack(args));

		while (src_code.length) {
			var el = this.take(code_generators);
			var handle = null;

			// Stopping compilation on error.
			if (is_err(el)) {
				return el;
			}

			el = el(); // Invoking the generator.

			if (isNum(el)) {
				el = "stack.push(" + el + ");";
			}
			else {
				if (is_err(el)) {
					return el;
				}
			}

			// Adding the generated code line by line
			handle = el.split("\n");
			for (var i = 0; i < handle.length; i++) {
				app(handle[i]);
			}
		}

		app("stack");
		return prod_code;
	};
};

var rig = new RIG();