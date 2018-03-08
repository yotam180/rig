/* global rig */

rig.statements["t"] = 0; // Top-wise
rig.statements["T"] = 0; // Top-safe
rig.statements["s"] = 0; // Stack-wise
rig.statements["S"] = 0; // Stack-safe

rig.statements["p"] = new Expression(
    "p",
    [Expression.ANY], // One parameter which is required and accepts literals,
    new StringFormatter("stack.push(%0);") // Template for the block
);


// Performs 'Peek' on the stack.
rig.expressions["l"] = new Expression(
    "l",
    [],
    new StringFormatter("stack[stack.length-1]")
);

// Pops the stack
rig.expressions["p"] = new Expression(
    "p",
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


