function makeGuest(number) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + 1;
  return number === randomNum;
}

console.log(makeGuest(1));
