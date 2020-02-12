const getData = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number'
        ? resolve(num * 2)
        : reject('Error has taken place');
    }, 2000);
  });

const getNumber = async () => {
  let number = await getData(2);
  number = await getData(number);
  console.log(number);
};

getNumber();
