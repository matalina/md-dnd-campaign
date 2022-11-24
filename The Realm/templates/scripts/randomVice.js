function randomVice() {
  const list = [
    'pride/arrogance',
    'avarice/greed',
    'envy/jealousy',
    'wrath/anger',
    'lust/impurity',
    'gluttony/voracity',
    'sloth/laziness',
  ];

  const index = Math.floor(Math.random() * list.length) + 1;
  return list[index];
}

module.exports = randomVice;