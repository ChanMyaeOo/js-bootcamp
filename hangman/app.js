const hangman1 = new Hangman('cat', 2);
const hangman2 = new Hangman('country', 2);

const puzzleEl = document.querySelector('#puzzle');
const guessCountEl = document.querySelector('#guessCount');

puzzleEl.textContent = hangman1.getPuzzle();
guessCountEl.textContent = hangman1.getStatusMessage();

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);

  hangman1.makeGuess(guess);
  puzzleEl.textContent = hangman1.getPuzzle();
  guessCountEl.textContent = hangman1.getStatusMessage();
});
