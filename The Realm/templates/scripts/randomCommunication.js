function randomCommunication() {
  const list = [
    'The item communicates by transmitting emotion to the creature carrying or wielding it.',
    'The item can speak, read, and understand one or more languages.',
    'The item can speak, read, and understand one or more languages. In addition, the item can communicate telepathically with any character that carries or wields it.',
  ];

  const index = Math.floor(Math.random() * list.length) + 1;
  return list[index];
}

module.exports = randomCommunication;