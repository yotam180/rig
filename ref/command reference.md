# Command reference for `rig`

Here will be described all the commands.

## `p` - push (Statement)
_pushes its argument onto the stack._

*Arguments*
 - value to push

*Example* 
 - Running `p5` on the stack `s=[1, 7]` will leave a stack `s=[1, 7, 5]`.

## `p` - pop (Expression)
_pops the top element of the stack and returns it._

*Arguments*
 - none

*Example*
 - Running `Ap5` on the stack `s=[1, 2, 3]` will leave a stack `s=[1, 2]`, `AX=3`, and `LRR=AX`.

## `l` - peek (Expression)
_returns the top element of the stack without removing it._

*Arguments*
 - none

*Example*
 - Running `ap5` on the stack `s=[1, 2, 3]` will leave a stack `s=[1, 2, 3]`, `AX=3`, and `LRR=AX`.

## `A`, `B`, `C`, `D` - set register value (Statements)
_Sets the register value to their argument._

*Arguments*
 - value to set

*Example*
 - Running `B6` will leave `BX=6` and `LRR=BX`.

## `P` - is prime? (Statement)
_For each element on the stack, sets it to `true` (1) if it is prime, otherwise to `false` (0)._

*Arguments*
 - none

*Example*
 - Running `P` on the stack `s=[1, 2, 6, 7, 9]` will cause `s=[false, true, false, true, false]`.