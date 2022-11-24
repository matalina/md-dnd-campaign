# Token Availability

There are 100 Carver Tokens in existence. Each one instills the attuned creature with a unique stronghold based on the creature's power. As the creature increases in power so too does the stronghold and it grows in size and ability.

The token is made of magical wood stolen from The World Tree. On one side a star is carved and on the other is a two digit rune indicating which number token it is.

```button
name New Token
type note(NewToken, split) template
action Token Template
color default
```
^button-new-token

```dataview
TABLE number, attuned
from #token
where file.name != "Token Template"
sort number asc
```                            
