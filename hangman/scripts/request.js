const getRequest = async wordCount => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to fetch data.');
  }
};

// Working code callback pattern

// const getRequest = function(wordCount, callback) {
//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       callback(undefined, data.puzzle);
//       //   console.log(puzzle);
//     } else if (e.target.readyState === 4) {
//       callback('An error has taken place.', undefined);
//     }
//   });

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// };

const getCountryData = async countryCode => {
  const response = await fetch('//restcountries.eu/rest/v2/all');
  if (response.status === 200) {
    const data = await response.json();
    return data.find(country => country.alpha2Code === countryCode);
  } else {
    throw new Error('Unable to fetch country data');
  }
};

// new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       const countryData = data.find(
//         country => country.alpha2Code === countryCode
//       );
//       resolve(countryData);
//     } else if (e.target.readyState === 4) {
//       reject('An error has taken place');
//     }
//   });

//   request.open('GET', 'http://restcountries.eu/rest/v2/all');
//   request.send();
// });

const getLocation = async () => {
  const response = await fetch('//ipinfo.io/json?token=1eae91b68e5661');
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Unable to fetch location data');
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountryData(location.country);
};
