/*
First parameter of expression
*/
rig.expressions["₀"] = new Expression(
    "₀",
    [],
    new StringFormatter("_i0"),
    new Documentation(
        "Lambda parameter",
        Documentation.Expression,
        "Returns the first parameter for the current lambda."
        [],
        ""
    )
);

/*
Second parameter of expression
*/
rig.expressions["₁"] = new Expression(
    "₁",
    [],
    new StringFormatter("_i1"),
    new Documentation(
        "Lambda parameter",
        Documentation.Expression,
        "Returns the second parameter for the current lambda."
        [],
        ""
    )
);

/*
Third parameter of expression
*/
rig.expressions["₂"] = new Expression(
    "₂",
    [],
    new StringFormatter("_i2"),
    new Documentation(
        "Lambda parameter",
        Documentation.Expression,
        "Returns the third parameter for the current lambda."
        [],
        ""
    )
);
