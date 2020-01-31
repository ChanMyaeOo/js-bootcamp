let calcTip = function(total, tip = 20) {
  return `A ${tip}% on $${total} would be ${(tip / total) * 100}`;
};

let tip = calcTip(100, 25);
console.log(tip);
