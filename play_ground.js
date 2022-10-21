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

// JS Arrow function

console.log('\nJS Arrow function\n===========================');

const addOne = (count) => {
  return count + 1;
};

const addTwo = (count) => count + 2;

console.log('Count: 1=' + 1);
console.log('Count: 1+1=' + addOne(1));
console.log('Count: 2+2=' + addTwo(2));

// JS filter

console.log('\nJS Filter\n===========================');

const fruits = ['apple', 'banana', 'citrus', 'datte'];

const filteredFruits = fruits.filter((fruit) => fruit.length > 5);

console.log('Fruits: ' + fruits);
console.log('Filtered Fruits: ' + filteredFruits);
