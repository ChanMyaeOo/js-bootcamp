let hangman1;
// const hangman2 = new Hangman('country', 2);

const puzzleEl = document.querySelector('#puzzle');
const guessCountEl = document.querySelector('#guessCount');

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);

  hangman1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = hangman1.puzzle;
  guessCountEl.textContent = hangman1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getRequest(2);
  hangman1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();
