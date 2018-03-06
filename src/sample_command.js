/* global rig */

rig.statements["p"] = new Expression(
    "p",
    [Expression.ANY], // One parameter which is required and accepts literals,
    new StringFormatter("stack.push(%0);") // Template for the block
);

rig.expressions["+"] = new Expression(
    "+",
    [Expression.ANY, Expression.OPTIONAL], // Second parameter is optional
    new StringFormatter("(%0+%1)", {1: 1}) // Default value for %1 is 1 (increment ++)
);