function randomSenses() {
  const list = [
    'Hearing and normal vision out to 30 feet.',
    'Hearing and normal vision out to 60 feet',
    'Hearing and normal vision out to 120 feet.',
    'Hearing and darkvision out to 120 feet.',
  ];

  const index = Math.floor(Math.random() * list.length) + 1;
  return list[index];
}

module.exports = randomSenses;