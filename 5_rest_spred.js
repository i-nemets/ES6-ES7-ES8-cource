// // Rest---------------------------------------------------------
// function average(a, ...arrgs) {
//   return arrgs.reduce((acc, i) => (acc += i), 0) / arrgs.length;
// }

// console.log(average(1, 2, 3, 4, 5, 6, 7, 8));

// Spred------------------------------------------------------------
// const array = [1, 2, 3, 5, 8, 13];
// console.log('array', array); // [ 1, 2, 3, 5, 8, 13 ]
// console.log('array', ...array); // 1 2 3 5 8 13

// console.log('Math.max...array', Math.max(...array));
//console.log(Math.max.apply(null, array)); // old

// const fib = [1, ...array];
// console.log(fib);

// Destructuring-----------------------------------------------------
//Array
// const array = [1, 2, 3, 5, 8, 13];

// const [a, b, ...c] = array;
// console.log(a, b, c); // 1 2 [ 3, 5, 8, 13 ]

// const [a, , c] = array;
// console.log(a, c); //1 3

//Oblect
// const addres = {
//   country: 'Russia',
//   city: 'Moskow',
//   street: 'Lenina',
//   concat: function () {
//     return `${this.country} ${this.city} ${this.street}`;
//   },
// };

// const { city, country, street, concat: addresConcat } = addres;
// console.log(city);
//console.log(concat.call(addres));
// console.log(addresConcat.call(addres));

//console.log(addres.concat());

// const { city, ...rest } = addres;
// console.log(city);
// console.log(rest);

// const newAddress = { ...addres, street: 'Geroev', code: 123 };
// console.log('new ', newAddress);
