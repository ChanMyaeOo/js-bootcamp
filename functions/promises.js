// Callback
const getData = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2);
    } else {
      callback('Number must be provided');
    }
  }, 2000);
};

////////////////////////// Nested callback causes Callback Hell
// getData(2, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     getData(data, (error, data) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data);
//       }
//     });
//     console.log(data);
//   }
// });

// Promises

// const getPromise = num =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       typeof num === 'number'
//         ? resolve(num * 2)
//         : reject('Number must be provided');
//     }, 2000);
//   });

/////////////////////////// Nested promise still duplicated
// getPromise(2).then(
//   data => {
//     getPromise(data).then(
//       data => {
//         console.log(`Promise data: ${data}`);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

////////////////////////////////////// The best way
// getPromise(10)
//   .then(data => {
//     return getPromise(data);
//   })
//   .then(data => {
//     return getPromise(data);
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
