```
function duplicateCount(text){
  const charCount = {};
  let duplicatesCount = 0;
  const lowerText = text.toLowerCase();
  for (let i = 0; i < lowerText.length; i++) 
  {
    const char = lowerText[i];
    if (/[a-z0-9]/.test(char)) 
    {
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] === 2) 
      {
        duplicatesCount++;
      }
    }
  }
  return duplicatesCount;
}
```
