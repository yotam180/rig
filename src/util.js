/*
Sort the stack.
*/
rig.statements["∥"] = new Expression(
    "∥",
    [],
    new StringFormatter("stack.sort();"),
    new Documentation(
        "Sort stack",
        Documentation.Statement | Documentation.StackWise,
        "Sorts the stack, from small to large.",
        [],
        ""
    )
);

/*
Clear the stack.
*/
rig.statements["←"] = new Expression(
    "←",
    [],
    new StringFormatter("stack = [];"),
    new Documentation(
        "Clear stack",
        Documentation.Statement | Documentation.StackWise,
        "Clears the stack.",
        [],
        ""
    )
);

/*
Duplicate the stack.
*/
rig.statements["→"] = new Expression(
    "→",
    [],
    new StringFormatter("stack = stack.concat(stack);"),
    new Documentation(
        "Duplicate stack",
        Documentation.Statement,
        "Concatenates the stack to itself.",
        [],
        "Running `→` on `s=[1, 2, 3]` will transform it to `s=[1, 2, 3, 1, 2, 3]`"
    )
);

/*
Duplicate the last element of the stack
*/
rig.statements["↗"] = new Expression(
    "s",
    [],
    new StringFormatter("stack.push(stack[stack.length - 1]);"),
    new Documentation(
        "Duplicate element",
        Documentation.Statement | Documentation.TopSafe,
        "Duplicates the top element of the stack.",
        [],
        "Running `→` on `s=[1, 2, 3]` will transform it to `s=[1, 2, 3, 3]`"
    )
);

/*
Manipulate stack using map expression
*/
rig.statements["λ"] = new Expression(
    "λ",
    [Expression.ANY],
    new StringFormatter("stack = stack.map(_i0 => %0);"),
    new Documentation(
        "Map stack",
        Documentation.Statement | Documentation.ElementWise,
        "Manipulates the stack using a given lambda expression",
        [
            "Expression - a lambda expression describing how to modify each element. Accepts one parameter `₀`"
        ],
        ""
    )
);

var numerize = function(x) {
    if (!x) {
        return 0;
    }
    return Number(x) || 0;
}

/*
Numerize all elements of the stack
*/
rig.statements[";"] = new Expression(
    ";",
    [],
    new StringFormatter("stack = stack.map(x => numerize(x));"),
    new Documentation(
        "Numerize",
        Documentation.Statement | Documentation.ElementWise,
        "Makes all elements in a stack a single number using the JS Number() constructor. If falsy - 0.",
        [],
        ""
    )
);

rig.statements["r"] = new Expression(
    "R",
    [],
    new StringFormatter("stack.push(Array.from({length: stack.pop()}, (x,i) => i));"),
    new Documentation(
        "Range",
        Documentation.Statement | Documentation.TopWise,
        "Pops the last element and creates a range from 0 to the element (exclusive).",
        [],
        "Running `R` for `s=[1, 4]` will transform the stack to `s=[1, 0, 1, 2, 3]`"
    )
);

rig.statements["R"] = new Expression(
    "R",
    [],
    new StringFormatter("stack.reverse();"),
    new Documentation(
        "Reverse",
        Documentation.Statement | Documentation.StackWise,
        "Reverses the stack elements.",
        [],
        ""
    )
)