function randomAttribute() {
  const rolls = [];
  for (let i = 0; i < 4; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  const min = Math.min(...rolls);
  return rolls.reduce((total, roll) => total + roll, 0) - min;
}

module.exports = randomAttribute;