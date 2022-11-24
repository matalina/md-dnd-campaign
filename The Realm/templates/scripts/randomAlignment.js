function randomAlignment() {
  const alignments = [
    'Lawful Good',
    'Neutral Good',
    'Chaotic Good',
    'Lawful Neutral',
    'Neutral',
    'Chaotic Neutral',
    'Lawful Evil',
    'Neutral Evil',
    'Chaotic Evil',
  ];

  const index = Math.floor(Math.random() * alignments.length) + 1;
  return alignments[index];
}

module.exports = randomAlignment;