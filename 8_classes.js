// class Person {
//   type = 'human';
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(this.name + ' говорит привет');
//   }
// }

// const max = new Person('Max');
// max.greet();
// console.log(max.type);

// class Programmer extends Person {
//   constructor(name, job) {
//     super(name);

//     this._job = job;
//   }

//   get job() {
//     return this._job.toUpperCase();
//   }

//   set job(job) {
//     this._job = job;
//   }

//   greet() {
//     super.greet();
//     console.log('Rewritten');
//   }
// }

// const frontend = new Programmer('Igor', 'frontend');
// console.log(frontend);
// frontend.greet();

// Static

// class Util {
//   static average(...args) {
//     return args.reduce((acc, i) => (acc += i), 0) / args.length;
//   }
// }

// console.log(Util.average(1, 1, 2, 3, 5, 8, 13));
