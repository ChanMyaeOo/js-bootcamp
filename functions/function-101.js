// T(°C) = (68°F - 32) × 5/9 = 20 °C
// T(K) = (T(°F) + 459.67)× 5/9

let convertFahrenheitToCelsius = function(temp) {
  return (temp - 32) * (5 / 9);
};

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));
