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

## `tP` - is prime? (Statement, Top-wise)
_Sets the stack top element to `true` (1) if it is prime, otherwise to `false` (0)._

*Arguments*
 - none

*Example*
 - Running `P` on the stack `s=[1, 2, 6, 7, 9]` will cause `s=[1, 2, 6, 7, false]`.

## `TP` - is prime? (Statement, Top-safe)
_Adds on top of the stack top element `true` (1) if it is prime, otherwise `false` (0)._

*Arguments*
 - none

*Example*
 - Running `P` on the stack `s=[1, 2, 6, 7, 9]` will cause `s=[1, 2, 6, 7, 9, false]`.

## `²` - square (Statement)
_Squares all the elements of the stack._

*Arguments*
 - none

*Example*
 - Running `²` on the stack `s=[2, 3, 4]` will leave the stack `s=[4, 9, 16]`.

## `t²` - square (Statement, Top-wise)
_Squares the top element of the stack._

*Arguments*
 - none

*Example*
 - Running `t²` on the stack `s=[2, 3, 4]` will leave the stack `s=[2, 3, 16]`.

## `T²` - square (Statement, Top-safe)
_Pushes the square of the stack top element._

*Arguments*
 - none

*Example*
 - Running `T²` on the stack `s=[2, 3, 4]` will leave the stack `s=[2, 3, 4, 16]`.

## `∥` - sort (Statement)
_Sorts the stack._

*Arguments*
 - none

*Example*
 - `∥` on stack `s=[1, 8, 5, 3]` will give `s=[1, 3, 5, 8]`.

## `←` - clear (Statement)
_Clears the stack._

*Arguments*
 - none

*Example*
 - Will always leave `s=[]`.

## `→` - duplicate stack (Statement)
_Duplicates the stack in order._

*Arguments*
 - none

*Example*
 - On stack `s=[1, 2]` will produce `s=[1, 2, 1, 2]`.

## `↗` - duplicate element (Statement)
_Duplicates the top element of the stack._

*Arguments*
 - none

*Example*
 - On stack `s=[1, 2]` will produce `s=[1, 2, 2]`.