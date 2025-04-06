[N-th Fibonacci](https://www.codewars.com/kata/522551eee9abb932420004a0)

DESCRIPTION:


Write a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:


nthFibo(4) == 2


Because 2 is the 4th number in the Fibonacci Sequence.
For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

```
function nthFibo(n) {
  if(n === 1)
    {
      return 0;
    }
  if(n === 2)
    {
      return 1;
    }
  let n0 = 0;
  let n1 = 1;
  for(let i = 3; i <= n; i++)
    {
      let tmp = n1;
      n1 += n0;
      n0 = tmp;
    }
  return n1;
}
```
