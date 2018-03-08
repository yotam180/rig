/*
Sort the stack.
*/
rig.statements["∥"] = new Expression(
    "∥",
    [],
    new StringFormatter("stack.sort();")
);

/*
Clear the stack.
*/
rig.statements["←"] = new Expression(
    "←",
    [],
    new StringFormatter("stack = [];")
);

/*
Duplicate the stack.
*/
rig.statements["→"] = new Expression(
    "→",
    [],
    new StringFormatter("stack = stack.concat(stack);")
);

/*
Duplicate the last element of the stack
*/
rig.statements["↗"] = new Expression(
    "s",
    [],
    new StringFormatter("stack.push(stack[stack.length - 1]);")
);

/*
Manipulate stack using map expression
*/
rig.statements["λ"] = new Expression(
    "λ",
    [Expression.ANY],
    new StringFormatter("stack = stack.map(_i0 => %0);")
);