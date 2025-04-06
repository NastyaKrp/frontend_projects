```
function lastDigit(n, d) {
  const numStr = n.toString();
  
  if (d > numStr.length) {
        return Array.from(numStr).map(Number);
    }
    
  if (d <= 0) {
        return [];
    }
  
  return Array.from(numStr.slice(-d)).map(Number);
}
```
