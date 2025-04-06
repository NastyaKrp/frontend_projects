```
function highestRank(arr){
  let maxFrequency = 0;
  let mostFrequentNumber = arr[0];

  for (let i = 0; i < arr.length; i++)
  {
    let currentNumber = arr[i];
    let currentFrequency = 1;

    for (let j = i + 1; j < arr.length; j++) 
    {
      if (arr[j] === currentNumber)
      {
        currentFrequency++;
      }
    }

    if (currentFrequency > maxFrequency || (currentFrequency === maxFrequency && currentNumber > mostFrequentNumber))
    {
      mostFrequentNumber = currentNumber;
      maxFrequency = currentFrequency;
    }
  }

  return mostFrequentNumber;
}
```
