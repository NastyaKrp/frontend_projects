```
function getMiddle(s)
{
  const length = s.length;
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) 
  {
    return s.substring(middleIndex - 1, middleIndex + 1);
  } 
  else 
  {
    return s.charAt(middleIndex);
  }
}
```
