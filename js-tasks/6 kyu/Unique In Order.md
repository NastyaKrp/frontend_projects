[Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667)

DESCRIPTION:

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder("AAAABBBCCDAABBB") == {'A', 'B', 'C', 'D', 'A', 'B'}

uniqueInOrder("ABBCcAD")         == {'A', 'B', 'C', 'c', 'A', 'D'}

uniqueInOrder([1,2,2,3,3])       == {1,2,3}

```
var uniqueInOrder=function(iterable)
{
  let arr = new Array;
  if(typeof iterable === "string")
    {
      arr = iterable.split("");
    }
  else
    {
      arr = iterable;
    }
  let i = 0;
      while(i < arr.length - 1)
      { 
        if(arr[i] === arr[i + 1])
        {
          arr.splice(i + 1, 1);
        }
        else
        {
          i++;
        }
      }
  return arr;
}
```
