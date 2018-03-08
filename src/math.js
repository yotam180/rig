rig.expressions["+"] = new Expression(
    "+",
    [Expression.ANY, Expression.OPTIONAL], // Second parameter is optional
    new StringFormatter("(%0+%1)", {1: 1}), // Default value for %1 is 1 (increment ++)
    new Documentation(
        "Addition",
        Documentation.Expression,
        "Adds its two arguments and returns the result.",
        [
            "Number a - the first number to add.",
            "Number b - the second number to add."
        ],
        "`+5 3` will return 8."
    )
);

rig.statements["+"] = new Expression(
    "+",
    [Expression.OPTIONAL], 
    new StringFormatter("stack = stack.map(x => x + %0)", {0: 1}), 
    [
        new Documentation(
            "Addition",
            Documentation.Statement | Documentation.ElementWise,
            "Adds its argument to every element in the stack.",
            [
                "Number - the number to add.",
            ],
            ""
        ),
        new Documentation(
            "Addition",
            Documentation.Statement | Documentation.ElementWise,
            "Increments every element in the stack.",
            [],
            ""
        ),
    ]
);

rig.statements["T+"] = new Expression(
    "T+",
    [], // Second parameter is optional
    new StringFormatter("stack.push(stack[stack.length - 2] + stack[stack.length - 1]);"),
    new Documentation(
        "Addition",
        Documentation.Statement | Documentation.TopSafe,
        "Adds the two top elements of the stack and pushes the result.",
        [],
        ""
    )
);

rig.expressions["-"] = new Expression(
    "-",
    [Expression.ANY, Expression.OPTIONAL], // Second parameter is optional
    new StringFormatter(function(rig, children) {
        if (!children[1]) {
            return "(0-" + children[0] + ")";
        }
        else {
            return "(" + children[0] + "-" + children[1] + ")";
        }
    }),
    [
        new Documentation(
            "Subtraction",
            Documentation.Expression,
            "Subtracts its two parameters and returns the result.",
            [
                "Minuend - the number being subtracted from",
                "Subtrahend - the number being subtracted"
            ],
            "`-5 3` will return 2."
        ),
        new Documentation(
            "Negation",
            Documentation.Expression,
            "Negates its argument.",
            [
                "Number - the number to negate"
            ],
            "`-5` will return -5. `-l` will return the negated stack top element."
        )
    ]
);

rig.expressions["*"] = new Expression(
    "*",
    [Expression.ANY, Expression.OPTIONAL], // Second parameter is optional
    new StringFormatter("(%0*%1)", {1: 2}),
    new Documentation(
        "Multiplication",
        Documentation.Expression,
        "Multiplies its two arguments and returns the result.",
        [
            "Factor a - the first number of the multiplication",
            "Factor b - the second number of the multiplication"
        ],
        "*3 6 will return 18."
    )
);

rig.expressions["/"] = new Expression(
    "/",
    [Expression.ANY, Expression.OPTIONAL], // Second parameter is optional
    new StringFormatter(function(rig, children) {
        if (!children[1]) {
            return "(1/" + children[0] + ")";
        }
        else {
            return "(" + children[0] + "/" + children[1] + ")";
        }
    }),
    [
        new Documentation(
            "Multiplicative Inverse",
            Documentation.Expression,
            "Returns the multiplicative inverse of its argument (1/argument).",
            [
                "Number - the number to find the value of its inverse."
            ],
            "`/5` will return 0.2."
        ),
        new Documentation(
            "Division",
            Documentation.Expression,
            "Divides its first argument by its second and returns the result.",
            [
                "Numerator - the numerator of the division",
                "Denumerator - the denumerator of the division"
            ],
            "`/5 2` will return 2.5."
        )
    ]
);

rig.expressions["÷"] = new Expression(
    "÷",
    [Expression.ANY, Expression.OPTIONAL],
    new StringFormatter("Math.floor(%0/%1)"),
    new Documentation(
        "Division of integers",
        Documentation.Expression,
        "Divides its first argument by its second and returns the integer part of the result.",
        [
            "Numerator - the numerator of the division",
            "Denumerator - the denumerator of the division"
        ],
        "`/5 2` will return 2."
    )
);

var is_prime = function(x) {
    for(var i = 2; i < x; i++)
        if(x % i === 0) 
            return false;
    return x > 1;
}; 

/*
Is a number prime? Element-wise.
*/
rig.statements["P"] = new Expression(
    "P",
    [],
    new StringFormatter("stack = stack.map(x => is_prime(x) ? 1 : 0);"),
    new Documentation(
        "Prime numbers check",
        Documentation.Statement | Documentation.ElementWise,
        "For each element on the stack, checks if it's prime. If so, changes it to 1. Otherwise to 0.",
        [],
        "`P` for the stack `s=[1, 2, 3]` will transform the stack to `s=[0, 1, 1]`."
    )
);

/*
Absolute value
*/
rig.expressions["∥"] = new Expression(
    "∥",
    [Expression.ANY],
    new StringFormatter("Math.abs(%0)"),
    new Documentation(
        "Absolute Value",
        Documentation.Expression,
        "Returns the absolute value of its argument.",        
        [
            "Number - the number to get the absolute value of."
        ],
        "`∥-5` will return 5."
    )
)

/*
Top-wise prime checking.
*/
rig.statements["tP"] = new Expression(
    "tP",
    [],
    new StringFormatter("stack[stack.length - 1] = is_prime(stack[stack.length - 1])"),
    new Documentation(
        "Prime numbers check",
        Documentation.Statement | Documentation.TopWise,
        "For the top element of the stack, checks if it's prime. If so, changes it to 1. Otherwise to 0.",
        [],
        "`P` for the stack `s=[1, 2, 3]` will transform the stack to `s=[1, 2, 1]`."
    )
);

/*
Top-safe prime checking.
*/
rig.statements["TP"] = new Expression(
    "tP",
    [],
    new StringFormatter("stack.push(is_prime(stack[stack.length - 1]))"),
    new Documentation(
        "Prime numbers check",
        Documentation.Statement | Documentation.TopSafe,
        "For the top element of the stack, checks if it's prime. If so, pushes 1, otherwise pushes 0.",
        [],
        "`P` for the stack `s=[1, 2, 3]` will transform the stack to `s=[1, 2, 3, 1]`."
    )
);

/*
Square the numbers. Element-wise.
*/
rig.statements["²"] = new Expression(
    "²",
    [],
    new StringFormatter("stack = stack.map(x => x ** 2);"),
    new Documentation(
        "Square",
        Documentation.Statement | Documentation.ElementWise,
        "Squares all the elements of the stack.",
        [],
        "`²` will transform the stack `s=[1, 2, 3]` to `s=[1, 4, 9]`."
    )
);

/*
Square the parameter
*/
rig.expressions["²"] = new Expression(
    "²",
    [Expression.ANY],
    new StringFormatter("(%0 ** 2)"),
    new Documentation(
        "Square",
        Documentation.Expression,
        "Squares its argument and returns the result.",
        [
            "Number - the number to square."
        ],
        "`²3` will return 9."
    )
);

/*
Square the number. Top-wise.
*/
rig.statements["t²"] = new Expression(
    "²",
    [],
    new StringFormatter("stack[stack.length - 1] = stack[stack.length - 1] ** 2;"),
    new Documentation(
        "Square",
        Documentation.Statement | Documentation.TopWise,
        "Squares the top element of the stack.",
        [],
        "`²` will transform the stack `s=[1, 2, 3]` to `s=[1, 2, 9]`."
    )
);

/*
Square the number. Top-safe.
*/
rig.statements["T²"] = new Expression(
    "²",
    [],
    new StringFormatter("stack.push(stack[stack.length - 1] ** 2);"),
    new Documentation(
        "Square",
        Documentation.Statement | Documentation.TopSafe,
        "Squares the top element of the stack and push the result.",
        [],
        "`²` will transform the stack `s=[1, 2, 3]` to `s=[1, 2, 3, 9]`."
    )
);

/*
Pi.
*/
rig.expressions["π"] = new Expression(
    "π",
    [],
    new StringFormatter("3.1415926535"),
    new Documentation(
        "PI (constant)",
        Documentation.Expression,
        "The constant PI (π)",
        [],
        "`π` will return 3.1415926535."
    )
);

rig.expressions["τ"] = new Expression(
    "τ",
    [],
    new StringFormatter("10"),
    new Documentation(
        "Ten (constant)",
        Documentation.Expression,
        "The constant 10 (Ten)",
        [],
        ""
    )
);

rig.statements["τ"] = new Expression(
    "τ",
    [],
    new StringFormatter("stack.push(10);"),
    new Documentation(
        "Ten (constant)",
        Documentation.Statement | Documentation.TopSafe,
        "Pushes the number 10 (Ten) to the stack",
        [],
        ""
    )
);

rig.statements["ς"] = new Expression(
    "ς",
    [],
    new StringFormatter("stack.push(1);"),
    new Documentation(
        "One (constant)",
        Documentation.Statement | Documentation.TopSafe,
        "Pushes the number 1 (One) to the stack",
        [],
        ""
    )
);