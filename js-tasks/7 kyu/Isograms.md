[Isograms](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

DESCRIPTION:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

```
function isIsogram(str)
{
  if(str === '')
    {
      return true;
    }
  str = str.toUpperCase();
  let copy = "";
  let i = 0;
  let k = 0;
  while(i < str.length)
    {
      if(copy.indexOf(str[i]) === -1)
        {
          copy = `${copy}${str[i]}`;
          k++;
        }
        i++
    }
    if(str.length - k === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
```
