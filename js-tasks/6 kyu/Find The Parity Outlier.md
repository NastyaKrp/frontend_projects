[Find The Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc)


DESCRIPTION:


You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.
```
function findOutlier(integers)
{
  let l = integers.length;
  if(integers[0] % 2 === 0 && integers[1] % 2 === 0 || integers[0] % 2 === 0 && integers[2] % 2 === 0 || integers[1] % 2 === 0 && integers[2] % 2 === 0)
    {
      for(let i = 0; i < l; i++)
        {
          if(Math.abs(integers[i] % 2) === 1)
            {
              return integers[i];
            }
        }
    }
  else
    {
      for(let i = 0; i < l; i++)
        {
          if(integers[i] % 2 === 0)
            {
              return integers[i];
            }
        }
    }
}
```
