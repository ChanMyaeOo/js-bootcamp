const getRequest = function(wordCount, callback) {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
      //   console.log(puzzle);
    } else if (e.target.readyState === 4) {
      callback('An error has taken place.', undefined);
    }
  });

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};

const getCountryData = function(countryCode, callback) {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const countryData = data.find(
        country => country.alpha2Code === countryCode
      );
      callback(undefined, countryData);
      //   console.log(countryData.name);
    } else if (e.target.readyState === 4) {
      callback('An error has taken place', undefined);
    }
  });

  request.open('GET', 'http://restcountries.eu/rest/v2/all');
  request.send();
};
