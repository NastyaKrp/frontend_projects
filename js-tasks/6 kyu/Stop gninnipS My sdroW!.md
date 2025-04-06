[Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

DESCRIPTION:

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 

spinWords( "This is a test") => returns "This is a test" 

spinWords( "This is another test" )=> returns "This is rehtona test"

```
function spinWords(string){
  let res = '';
  let arr = new Array;
  arr = string.split(" ");
  let str = '';
  if(arr.length === 1)
    {
      str = arr[0];
      if(str.length >= 5) return str.split('').reverse().join('');
      else return str;
    }
  for(let i = 0; i < arr.length; i++)
    {
      str = arr[i]
      if(i === arr.length - 1)
        {
          if(str.length >= 5) return `${res}${str.split('').reverse().join('')}`;
          else return `${res}${str}`;
        }
      if(str.length >= 5)
        {
          res = `${res}${str.split('').reverse().join('')} `;
        }
      else
        {
          res = `${res}${str} `;
        }
    }
  return res;
}
```
