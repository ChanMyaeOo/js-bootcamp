let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
};

let cel1 = convertFahrenheitToCelsius(32);
let cel2 = convertFahrenheitToCelsius(68);
console.log(cel1);
console.log(cel2);
