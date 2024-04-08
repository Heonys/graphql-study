function shuffle(array: any[]) {
  let currentIndex = array.length;
  let randomIndex;
  const newArray = Array.from(array); // While there remain elements to shuffle...

  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--; // And swap it with the current element.

    const _ref = [newArray[randomIndex], newArray[currentIndex]];
    newArray[currentIndex] = _ref[0];
    newArray[randomIndex] = _ref[1];
  }

  return newArray;
}

export { shuffle };
