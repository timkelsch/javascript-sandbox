function add(a, b) {
  return a + b
}

console.log(add(3,4));

const add1 = (a, b) => {
  return a + b;
}

console.log(add1(3,4));

// Implicit return on arrow function
const subtract = (a, b) => a - b;

console.log(subtract(6,2));

const double = (a) => a * 2

console.log(double(54));

// Don't need parens if you only have one parameter
// const triple = b => b * 3

// console.log(triple(3)); // would return 9

// Returning an object - curly braces
const createObj = () => {
  name: 'Brad'
};

const numbers = [1,2,3,4,5];

// dumb way
numbers.forEach(function (n) {
  console.log(n);
})

// smart way - arrow function in a callback
numbers.forEach(m => console.log(m));




// //  Normal function declaration
// // function add(a, b) {
// //   return a + b;
// // }

// // Arrow function syntax
// const add = (a, b) => {
//   return a + b;
// };

// // Implicit Return
// const subtract = (a, b) => a - b;

// // Can leave off () with a single param
// const double = (a) => a * 2;

// // Returning an object
// const createObj = () => ({
//   name: 'Brad',
// });

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (n) {
//   console.log(n);
// });

// // Arrow function in a callback
// numbers.forEach((n) => console.log(n));

// console.log(add(1, 2));
// console.log(subtract(10, 5));
// console.log(double(10));
// console.log(createObj());
