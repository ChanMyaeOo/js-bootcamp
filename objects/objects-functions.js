let getTemp = fahrenheit => {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9)
  };
};

let fahrenheitValue = getTemp(32).fahrenheit;
let celsiusValue = getTemp(32).celsius;
let kelvinValue = getTemp(32).kelvin;

let tempArr = [fahrenheitValue, celsiusValue, kelvinValue];

tempArr.forEach(el => console.log(el));
