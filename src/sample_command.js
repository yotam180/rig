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

// Performs 'Peek' on the stack.
rig.expressions["s"] = new Expression(
    "s",
    [],
    new StringFormatter("stack[stack.length-1]")
);

// Pops the stack
rig.expressions["S"] = new Expression(
    "S",
    [],
    new StringFormatter("stack.pop()")
);

// The expression will retrieve the value of a register.
// Iterating through all the registers and assigning the get operator.
var registers = ["AX", "BX", "CX", "DX", "IX", "JX", "KX"];
registers.forEach(function(e) {
	rig.expressions[e[0]] = new Expression(
		e[0],
		[], // There is no need for child expressions
		function(rig, children) {
			rig.LRR = e;
			return e;
		}
	);
})


