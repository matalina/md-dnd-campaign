function randomQuirk() {
  const list = [
    'Very introverted, quiet and reserved, keeps to themselves',
    'Highly extroverted, loves socializing and meeting new people',
    'Mega control freak who has to have everything their way',
    'Neat freak (often coincides with control freak)',
    'Total slob who never knows where anything is',
    'Super stubborn and will never admit when they’re wrong',
    'Brutally honest and can’t lie to save their life',
    'Extremely judgmental of other people',
    'Short-tempered, especially when irritated',
    'Always patient, even when frustrated',
    'Hilarious or odd sense of humor',
    'Very hard to make them laugh',
    'Constantly complains about everything',
    'Extremely loyal and will do anything for their friends/family',
    'Adventurous and willing to try anything',
    'Cautious and careful no matter what',
    'Energetic, hardly ever needs to rest',
    'Sleeps all the time and still gets tired during the day',
    'Horrible sense of direction and constantly gets lost',
    'Overachiever who loves school/structure',
    'Really modest and won’t ever brag about themselves',
    'Extremely emotional and will cry at the drop of a hat',
    'Stoic and detached, rarely shows emotion',
    'Wildcard whose behavior is unpredictable, even to their friends',
    'Notoriously two-faced and will betray anyone',
    'Charismatic and can convince anyone to do their bidding',
    'Very proper and always polite to others',
    'Obsessive personality — they’ll get attached and think/talk about it constantly',
  ];

  const index = Math.floor(Math.random() * list.length) + 1;
  return list[index];
}

module.exports = randomQuirk;