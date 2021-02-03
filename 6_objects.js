const cityField = 'city';

const job = 'Frontend';

const person = {
  age: 29,
  name: 'Igor',
  job, // если ключ = значению
  [cityField]: 'Volkovysk',
  'country-live': 'Belarus',
  toString() {
    return Object.keys(this)
      .filter((key) => key !== 'toString')
      .map((key) => this[key])
      .join(' ');
  },
};

// console.log(person.toString());

//Methods

const first = { a: 1 };
const second = { b: 2 };

// console.log(Object.is(20, 20));
// console.log(Object.assign(first, second)); // изменяется 1й объект
// console.log(Object.assign({}, first, second)); // создается новый оюъект

const obj = Object.assign({}, first, {
  c: 2,
  d: 3,
});

// console.log(obj);

console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'c', 2 ], [ 'd', 3 ] ]
console.log(Object.keys(obj));
console.log(Object.values(obj));
