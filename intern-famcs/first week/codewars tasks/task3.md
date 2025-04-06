```
function nicknameGenerator(name){
  if (name.length < 4) 
  {
    return "Error: Name too short";
  }

  const thirdLetter = name.charAt(2).toLowerCase();

  if("aeiou".includes(thirdLetter)) 
  {
    return name.substring(0, 4);
  } 
  
  else 
  {
    return name.substring(0, 3);
  }
}
```
