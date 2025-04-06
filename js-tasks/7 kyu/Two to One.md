[Two to One](https://www.codewars.com/kata/5656b6906de340bd1b0000ac)

DESCRIPTION:

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"

b = "xxxxyyyyabklmopq"

longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"

longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

```
function longest(s1, s2) {
  let res = '';
  s3 = `${s1}${s2}`;
  let c = 0;
  for(let i = 97; i < 123; i++)
    {
      c = 0;
      for(let k = 0; k < s3.length; k++)
        {
          if(s3.charCodeAt(k) === i && c === 0)
            {
              res = `${res}${s3[k]}`;
              c++;
            }
        }
    }
  return res;
}
```
