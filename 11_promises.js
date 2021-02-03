// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success');
//   }, 500);
// });

const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Done ${ms}`), ms);
  });

// delay(1000)
//   .then((data) => console.log(data))
//   .finally(() => console.log('Finally'));

// async function asyncDelay() {
//   try {
//     const data = await delay(2000);
//     console.log('async -try-> ', data);
//   } catch (e) {
//     console.log('async -caych-> ', e);
//   }
// }

// asyncDelay();

// Ждет выполнения всех промисов и выдает массив результатов
Promise.all([delay(1000), delay(500), delay(2000)]).then((data) =>
  console.log(data)
);
// Ждет выполнения самого быстрого промиса
Promise.race([delay(1000), delay(500), delay(2000)]).then((data) =>
  console.log(data)
);
