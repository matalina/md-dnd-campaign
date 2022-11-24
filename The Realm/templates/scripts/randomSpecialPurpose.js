function randomSpecialPurpose() {
  const list = [
    '_Aligned:_ The item seeks to defeat or destroy those of a diametrically opposed alignment. (Such an item is never neutral.)',
    '_Bane:_ The item seeks to defeat or destroy creatures of a particular kind, such as fiends, shapechangers, trolls, or wizards.',
    '_Protector:_ The item seeks to defend a particular race or kind of creature, such as elves or druids.',
    '_Crusader:_ The item seeks to defeat, weaken, or destroy the servants of a particular deity.',
    '_Templar:_ The item seeks to defend the servants and interests of a particular deity.',
    '_Destroyer:_ The item craves destruction and goads its user to fight arbitrarily.',
    '_Glory Seeker:_ The item seeks renown as the greatest magic item in the world, by establishing its user as a famous or notorious figure.',
    '_Lore Seeker:_ The item craves knowledge or is determined to solve a mystery, learn a secret, or unravel a cryptic prophecy.',
    '_Destiny Seeker:_ The item is convinced that it and its wielder have key roles to play in future events.',
    '_Creator Seeker:_ The item seeks its creator and wants to understand why it was created.',
  ];

  const index = Math.floor(Math.random() * list.length) + 1;
  return list[index];
}

module.exports = randomSpecialPurpose;