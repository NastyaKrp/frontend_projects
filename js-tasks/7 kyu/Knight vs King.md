[Knight vs King](https://www.codewars.com/kata/564e1d90c41a8423230000bc)

DESCRIPTION:

You put a Knight and a King in the board.

Complete the method that tell us which one can capture the other one.

You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

**Return:**

"Knight" if the knight is putting the king in check,

"King" if the king is attacking the knight

"None" if none of the above occur

**Example:**

knight = [7, "B"], king = [6, "C"]  ---> "King"

```
function knightVsKing(knightPosition, kingPosition) {
  let m = Math.abs(knightPosition[0] - kingPosition[0]);
  let n = Math.abs(knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt());
  if(m === 1 && (n === 1  || n === 0))
  {
    return "King";
  }
  else if((m === 2 || m === 1) && 3 - m === n)
    {
      return "Knight";
    }
  else
    {
      return "None";
    }
}
```
