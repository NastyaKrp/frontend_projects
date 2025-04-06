[Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272)

DESCRIPTION:

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

```
function high(x)
{
  let arr = x.split(' ');
  let str = '';
  let sum = 0;
  let prev = 0;
  let l = 0;
  for(let i = 0; i < arr.length; i++)
    {
      while(l < arr[i].length)
        {
          sum += arr[i].charCodeAt(l) - 96;
          l++;
        }
      if(sum > prev)
        {
          str = arr[i];
          prev = sum;
        }
      l = 0;
      sum = 0;
    }
  return str;
}
```
