[Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)


DESCRIPTION:

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


Examples:

"din"      =>  "((("

"recede"   =>  "()()()"

"Success"  =>  ")())())"

"(( @"     =>  "))((" 

```
function duplicateEncode(word){
  word = word.toLowerCase();
  let ans = "";
  for(let i = 0; i < word.length; i++)
    {
      if(word.indexOf(word[i]) === word.lastIndexOf(word[i]))
        {
          ans = `${ans}(`;
        }
      else
        {
          ans = `${ans})`;
        }
    }
  return ans;
}
```
