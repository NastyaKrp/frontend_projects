[Replace With Alphabet Position](https://www.codewars.com/kata/546f922b54af40e1e90001da)

DESCRIPTION:

Replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example

alphabet_position("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

```
function alphabetPosition(text) {
  text = text.replace(/ /g,'');
  text = text.toLowerCase();
  l = text.length;
  let k = 0;
  let str = '';
  if(Number(text.charCodeAt(0)) >= 97 && Number(text.charCodeAt(0)) <= 122)
    {
      str = `${str}${Number(text.charCodeAt(0)) - 96}`;
      k++;
    }
  for(let i = 1; i < l; i++)
    {
      if(Number(text.charCodeAt(i)) >= 97 && Number(text.charCodeAt(i)) <= 122)
        {
          if(k === 0)
            {
              str = `${str}${Number(text.charCodeAt(i)) - 96}`;
              k++;
            }
          else
          {
            str = `${str} ${Number(text.charCodeAt(i)) - 96}`;
          }
        }
    }
  return str;
}
```
