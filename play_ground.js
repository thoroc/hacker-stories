// JS list

console.log('\nJS list\n===========================');

const numbers = [1, 2, 3, 4];

const exponentialNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(exponentialNumbers);

// JS Class

console.log('\nJS Class\n===========================');

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const robin = new Person('Robin', 'Wieruch');

console.log(robin.getName());

const dennis = new Person('Dennis', 'Wieruch');

console.log(dennis.getName());
