let myBook = {
  title: 'Thu Lo Lu',
  author: 'Journal Kyaw Ma Ma lay',
  page: 420
};

let otherBook = {
  title: 'Lay Lwint Thu',
  author: 'Mya Than Thint',
  page: 360
};

let getSummary = function(book) {
  return {
    summary: `${book.title} is written by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.page} pages long`
  };
};

let myBookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(myBookSummary.summary);
console.log(myBookSummary.pageCountSummary);

// Challenge area
// T(°C) = (68°F - 32) × 5/9 = 20 °C
// T(K) = (T(°F) + 459.67)× 5/9
let showTemp = function(temp) {
  return {
    fahrenheit: temp,
    celsius: (temp - 32) * (5 / 9),
    kelvin: (temp + 459.67) * (5 / 9)
  };
};

let fahrenheit = showTemp(32).fahrenheit;
let celsius = showTemp(32).celsius;
let kelvin = showTemp(32).kelvin;

console.log(fahrenheit);
console.log(celsius);
console.log(kelvin);
