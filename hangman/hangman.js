class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessLetter = [];
    this.status = 'playing';
  }

  get statusMessage() {
    if (this.status === 'playing') {
      return `Guess left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      return `Nice try. The word was "${this.word.join('')}".`;
    } else {
      return 'Great work. You guessed the word.';
    }
  }

  calculateStatus() {
    // Problem solving 3
    const finished = this.word.every(
      letter => this.guessLetter.includes(letter) || letter === ' '
    );
    // Problem solving 2
    // const guessLetter = this.word.filter(letter => {
    //   return !this.guessLetter.includes(letter);
    // });

    // let finished = guessLetter.length === 0;

    // Problem solving 1
    // let finished = true;
    // this.word.forEach(letter => {
    //   if (this.guessLetter.includes(letter)) {
    //     finished = true;
    //   } else {
    //     finished = false;
    //   }
    // });
    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  get puzzle() {
    let puzzle = '';
    this.word.forEach(letter => {
      if (this.guessLetter.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });
    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessLetter.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== 'playing') {
      return;
    }
    if (isUnique) {
      this.guessLetter.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }

    this.calculateStatus();
  }
}

getRequest('2')
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(err);
  });

// testing
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', e => {
//   if (e.target.readyState === 4) {
//     const puzzle = JSON.parse(e.target.responseText);
//     console.log(puzzle);
//   }
// });

// request.open('GET', 'http://puzzle.mead.io/puzzle');
// request.send();

// testing restcountries.eu

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const countryCode = 'MM';
//     const data = JSON.parse(e.target.responseText);

//     const countryData = data.find(
//       country => country.alpha2Code === countryCode
//     );
//     console.log(countryData.name);
//   }
// });

// request.open('GET', 'http://restcountries.eu/rest/v2/all');
// request.send();

getCountryData('MM')
  .then(country => {
    console.log(country.name);
  })
  .catch(err => {
    console.log(err);
  });

// fetch('http://puzzle.mead.io/puzzle', {})
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Unable to fetch puzzle');
//     }
//   })
//   .then(data => {
//     console.log(`Fetch API data: ${data.puzzle}`);
//   })
//   .catch(err => {
//     console.log(err);
//   });

getLocation()
  .then(data => {
    console.log(
      `You are currently in ${data.city} ${data.region} ${data.country}!`
    );
    return getCountryData(data.country);
  })
  .then(data => {
    console.log(`Result from promise chaning : ${data.name}`);
  })
  .catch(err => {
    console.log(err);
  });

getCurrentCountry()
  .then(data => {
    console.log(data.name);
  })
  .catch(err => {
    console.log(err);
  });
