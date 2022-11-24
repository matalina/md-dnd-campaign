function getTodayInRealmTime(tp) {
  const time = tp.user.RealTime;
  const today = time().today();

  return `Today is day ${today.day} ` +
    `of the ${today.moons[parseInt(today.month) - 1]} Moon `
    `in the year ${today.year} LC. `
    `The time is ${today.hour}:${today.min}. `
    `And it is a ${today.type} day.`
}

module.exports = getTodayInRealmTime;