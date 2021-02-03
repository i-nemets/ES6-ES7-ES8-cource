class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

class ProtoStudent {
  university = 'BNTU';
}
const student = Reflect.construct(Student, ['Igor']);
// console.log(student.__proto__);
Reflect.apply(student.greet, { name: 'test' }, []);
console.log(Reflect.ownKeys(student));
//
// Reflect.preventExtensions(student); // блокировка модификации
student.age = 25;
console.log(student);
