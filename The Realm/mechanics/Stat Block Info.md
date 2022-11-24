
````
```statblock
image: [[Wikilink To Image]]
name: string
size: string
type: string
subtype: string
alignment: string
ac: number
hp: number
hit_dice: string
speed: string
stats: [number, number, number, number, number, number]
fage_stats: [number, number, number, number, number, number, number, number, number]
saves:
  - <ability-score>: number
skillsaves:
  - <skill-name>: number
damage_vulnerabilities: string
damage_resistances: string
damage_immunities: string
condition_immunities: string
senses: string
languages: string
cr: number
spells:
  - <description>
  - <spell level>: <spell-list>
traits:
  - name: <trait-name>
    desc: <trait-description>
  - ...
actions:
  - name: <trait-name>
    desc: <trait-description>
  - ...
legendary_actions:
  - name: <legendary_actions-name>
    desc: <legendary_actions-description>
  - ...
bonus_actions:
  - name: <trait-name>
    desc: <trait-description>
  - ...
reactions:
  - name: <reaction-name>
    desc: <reaction-description>
  - ...
```
````

````
```statblock
spells:
  - The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared
  - Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp
  - 1st level (4 slots): detect magic, identify, mage armor*, magic missile
  - 2nd level (3 slots): detect thoughts, mirror image, misty step
  - 3rd level (3 slots): counterspell, fly, lightning bolt
  - 4th level (3 slots): banishment, fire shield, stoneskin*
  - 5th level (3 slots): cone of cold, scrying, wall of force
  - 6th level (1 slot): globe of invulnerability
  - 7th level (1 slot): teleport
  - 8th level (1 slot): mind blank*
  - 9th level (1 slot): time stop
  - "* The archmage casts these spells on itself before combat."
```
````

````
```encounter
name: Example
creatures:
 - 3: Goblin
```
````

## Example Dragon Set up

```statblock
name: Nabaldaerev - Firebrand
monster: Ancient Black Dragon
type: black dragon
columns: 2
forceColumns: true
actions: 
  - name: Shape Change 
  - desc: The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon’s choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.
spells:
  - DC - 19, Bonus - +11, modifier - +5, can cast each spell 1/day
  - 1: Create or Destroy Water
  - 2: Blindness/Deafness
  - 3: Plant Growth
  - 5: Insect Plague 
```

```statblock
name: Leucis Firebrand
columns: 2
forceColumns: true
size: medium
type: male tiefling
alignment: chaotic evil
ac: 12
hp: 367
hit_dice: 21d20+147
speed: walking 30ft, flying 30ft
stats: [17, 14, 13, 16, 15, 19]
saves:
  - str: 3
  - dex: 2
  - con: 1
  - int: 3
  - wis: 2
  - cha: 5
skillsaves:
  - acrobatics: 2
  - animal handling: 2
  - arcana: 3
  - athletics: 3
  - deception: 5
  - history: 3
  - insight: 8
  - intimidation: 5
  - investigation: 3
  - medicine: 2
  - nature: 2
  - performance: 5
  - persuasion: 11
  - religtion: 3
  - slight of hand: 2
  - survival: 2
damage_vulnerabilities: string
damage_resistances: fire
damage_immunities: string
condition_immunities: string
senses: darkvision up to 60ft, passive perception 12, investigation 13, insight 18
languages: common, draconic
cr: 20
spells:
  - DC - 19, Bonus - +11, modifier - +5, can cast each spell 1/day
  - 1: Create or Destroy Water
  - 2: Blindness/Deafness
  - 3: Plant Growth
  - 5: Insect Plague
traits:
  - name: Winged
    desc: You have bat-like wings sprouting from your shoulder blades. You have a flying speed of 30 feet while you aren’t wearing heavy armor. This trait replaces the Infernal Legacy trait.
  - name: Legendary Resistance (3/Day)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.
actions: 
  - name: Attack - Vicious Dagger 20(60)
    desc: +9 to hit, 4 (1d4+3) piercing damage - When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon’s type
  - name: Shape Change 
    desc: The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon’s choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.    

```