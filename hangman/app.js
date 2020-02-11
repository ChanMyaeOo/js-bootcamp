const hangman1 = new Hangman('car parks', 2);
const hangman2 = new Hangman('country', 2);

const puzzleEl = document.querySelector('#puzzle');
const guessCountEl = document.querySelector('#guessCount');

puzzleEl.textContent = hangman1.puzzle;
guessCountEl.textContent = hangman1.statusMessage;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);

  hangman1.makeGuess(guess);
  puzzleEl.textContent = hangman1.puzzle;
  guessCountEl.textContent = hangman1.statusMessage;
});
