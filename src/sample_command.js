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

varegistersNames = {"a":"AX","b":"BX","c":"CX","d":"DX"};

varegistersName.keys().prototype.forEach(function(element)
{
    rig.expressions[element] = new Expression(
        element,//Runs on the list of expressions which serves as keys of the varegisterNames dictionary
        [],//There is no child expressions
        new (rig,children)=>{
            rig.lrr = varegistersNames[element];
            return varegistersNames[element];
        }//Creates a function which sets lrr to last used varregister and returns the varegister value
    );
});
