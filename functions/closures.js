// example 1
const showName = () => {
  const message = 'Long time no see';

  const printMessage = () => {
    console.log(message);
  };

  return printMessage;
};

const printMsg = showName();
printMsg();

// example 2
const showCount = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },

    getCount() {
      return count;
    }
  };
};

const count = showCount();
count.increment();
count.decrement();
count.decrement();
console.log(count.getCount());

// example 3
const adder = x => {
  return y => {
    return x + y;
  };
};

const calculate = adder(100);
const result = calculate(-20);
const result2 = calculate(50);
console.log(result2);

// exercise
const tipper = tipPercent => {
  return amount => {
    return amount * tipPercent;
  };
};

const calcTip = tipper(0.25);
const tip = calcTip(100);
console.log(tip);
