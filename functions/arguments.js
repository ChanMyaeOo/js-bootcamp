let calculateTip = function(total, tip = 0.2) {
  let tipPercent = tip * 100;
  let totalTip = total * tip;
  return `A ${tipPercent}% tip on $${total} would be $${totalTip}`;
};

let tipAmount = calculateTip(40, 0.25);
console.log(tipAmount);
