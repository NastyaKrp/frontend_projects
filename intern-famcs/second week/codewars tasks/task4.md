```
var findMissing = function (list) {  
  const commonDiff = (list[list.length - 1] - list[0]) / list.length;

  for (let i = 1; i < list.length; i++) 
  {
    if (list[i] !== list[0] + i * commonDiff) 
    {
      return list[0] + i * commonDiff;
    }
  }
  return list [0] ;
}
```
