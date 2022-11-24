---
item: Token of the Realm
number: <% tp.user.randomTokenNumber() %>
attuned: \-
tags: token
campaign: All Campaigns
level:
---
# [Token Name]

<% await tp.file.move("items//Tokens//" + tp.file.title) %>

Item: [[Token of the Realm]]

**Number:** 
**Attuned to:**

**Name:** [Token Name]

**Reputation:** 0

**Int:** <% tp.user.randomAttribute() %>
**Wis:** <% tp.user.randomAttribute() %>
**Cha:** <% tp.user.randomAttribute() %>

**Attunement:**
* grants Language Celestial
* While attuned to the artifact, you can use an action to cast [Add a cantrip]

**Communication:** <% tp.user.randomCommunication() %>

**Senses:** <% tp.user.randomSenses() %>

**Alignment:** <% tp.user.randomAlignment() %>

**Special purpose:** <% tp.user.randomSpecialPurpose() %>

**Virtue:** <% tp.user.randomVirtue() %>
**Vice:** <% tp.user.randomVice() %>
**Quirks:** <% tp.user.randomQuirk() %>