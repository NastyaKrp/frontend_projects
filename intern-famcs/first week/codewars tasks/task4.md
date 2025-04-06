```
function add(num1, num2) {
  const num1D = num1.toString().split('').reverse();
  const num2D = num2.toString().split('').reverse();
  const resultD = [];

  for (let i = 0; i < Math.max(num1D.length, num2D.length); i++) 
  {
    const d1 = i < num1D.length ? parseInt(num1D[i]) : 0;
    const d2 = i < num2D.length ? parseInt(num2D[i]) : 0;

    const sum = d1 + d2;
    resultD.push(sum);
  }

  const resultNumber = Number(resultD.reverse().join(''));
  return resultNumber;
}
```
