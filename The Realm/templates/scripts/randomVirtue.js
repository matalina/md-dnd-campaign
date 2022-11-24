function randomVirtue() {
  const list = [
    'humility/modesty',
    'generosity/charity',
    'kindness/gratitude',
    'patience/compassion',
    'chastity/purity',
    'temperance/moderation',
    'diligence/fervor',
  ];

  const index = Math.floor(Math.random() * list.length) + 1;
  return list[index];
}

module.exports = randomVirtue;