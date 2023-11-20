let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear'; // [ "apple", "grape", "pear" ]

// length is not read-only
fruits.length = 2; // truncates to length of 2

fruits[3] = 'strawberry'; // [ "apple", "grape", <1 empty slot>, "strawberry" ]

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach'; // [ "apple", "grape", <1 empty slot>, "strawberry", "blueberry", "peach" ]

x = fruits;
console.log(fruits);

