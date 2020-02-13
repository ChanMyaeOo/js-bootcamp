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
  puzzleEl.innerHTML = '';
  guessCountEl.textContent = hangman1.statusMessage;

  // console.log(hangman1.puzzle.split(''));
  const puzzleArr = hangman1.puzzle.split('');
  puzzleArr.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    puzzleEl.appendChild(span);
  });
};

const startGame = async () => {
  const puzzle = await getRequest(2);
  hangman1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();
