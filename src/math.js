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