[Roman Numerals Encoder](https://www.codewars.com/kata/51b62bf6a9c58071c600001b)

DESCRIPTION:

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return "M"

```
function solution(number){
  let str = '';
  let arr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let i = 0;
  n = number;
  while(number >= 1)
    {
      n = Math.floor(number % 10);
      if(n !== 0)
        {
          if(n < 4)
            {
              str = `${arr[i].repeat(n)}${str}`;
            }
          if(n === 4)
            {
              str = `${arr[i]}${arr[i + 1]}${str}`;
            }
          if(n > 5 && n < 9)
            {
              str = `${arr[i + 1]}${arr[i].repeat(n - 5)}${str}`;
            }
          if(n === 5)
            {
              str = `${arr[i + 1]}${str}`;
            }
          if(n === 9)
            {
              str = `${arr[i]}${arr[i + 2]}${str}`;
            }
        }
      number = number / 10;
      i += 2;
    }
  return str;
}
```
