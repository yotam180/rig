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
    })
);

rig.expressions["*"] = new Expression(
    "*",
    [Expression.ANY, Expression.OPTIONAL], // Second parameter is optional
    new StringFormatter("(%0*%1)", {1: 2}) 
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
    })
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
    new StringFormatter("stack = stack.map(x => is_prime(x));")
);


/*
Top-wise prime checking.
*/
rig.statements["tP"] = new Expression(
    "tP",
    [],
    new StringFormatter("stack[stack.length - 1] = is_prime(stack[stack.length - 1])")
);

/*
Top-safe prime checking.
*/
rig.statements["TP"] = new Expression(
    "tP",
    [],
    new StringFormatter("stack.push(is_prime(stack[stack.length - 1]))")
);

/*
Square the number. Element-wise.
*/
rig.statements["²"] = new Expression(
    "²",
    [],
    new StringFormatter("stack = stack.map(x => x ** 2);")
);

/*
Square the parameter
*/
rig.expressions["²"] = new Expression(
    "²",
    [Expression.ANY],
    new StringFormatter("(%0 ** 2)")
);

/*
Square the number. Top-wise.
*/
rig.statements["t²"] = new Expression(
    "²",
    [],
    new StringFormatter("stack[stack.length - 1] = stack[stack.length - 1] ** 2;")
);

/*
Square the number. Top-safe.
*/
rig.statements["T²"] = new Expression(
    "²",
    [],
    new StringFormatter("stack.push(stack[stack.length - 1] ** 2);")
);

/*
Pi.
*/
rig.expressions["π"] = new Expression(
    "π",
    [],
    new StringFormatter("3.1415926535")
);

