# Command reference for `rig`

Here will be described all the commands.

## `ɵ` - Safe Stack Action
This is not an action by itself, but signifies that the next action that comes
after it will not modify the stack. It does not work with every action, but every action that does support it will have a subclause describing how it functions with the `ɵ` preceeding it.

## `+` Accumulate the Stack
Accumulates (sums) all the elements in the stack.

**Destroys the stack** and leaves it with one element, which is the sum of all the elements that were in the stack before it was emptied.

> _Example_: executing `+` on the stack `[1, 2, 3]` will modify the stack to `[6]`.

### `ɵ+` Safe Stack Accumulation
Accumulates the stack and stores the result in the `AX` variable.

**Does not modify the stack**

> _Example_: Executing `ɵ+` on the stack `[1, 2, 3]` will put the value `6` in `AX`.