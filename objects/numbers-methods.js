let makeGuess = function(guessNumber) {
  let min = 1;
  let max = 5;

  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum === guessNumber;
};

console.log(makeGuess(1));
