[Handshake problem](https://www.codewars.com/kata/5574835e3e404a0bed00001b)

DESCRIPTION:

Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

```
function getParticipants(handshakes)
{
  let d = handshakes * 2 * 4 + 1;
  d = Math.round(Math.sqrt(d));
  let n1 =  Math.round((1 - d)/2);
  let n2 = Math.round((1 + d)/2);
  if(n1 >= 0 && n2 >= 0)
    {
      return Math.min(n1, n2);
    }
  else if(n1 < 0)
    {
      return n2;
    }
  else
    {
      return n2;
    }
}
```
