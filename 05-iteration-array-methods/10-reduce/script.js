const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum2);

const sum3 = () => {
  let acc = 0
  for (const cur of numbers) {
    acc += cur
  }
  return acc
}

console.log(sum3);

// // Add all numbers together
// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// // Using a for loop
// const sum3 = () => {
//   let acc = 0;
//   for (const cur of numbers) {
//     acc += cur;
//   }
//   return acc;
// };

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0)
console.log(total);

// In the provided JavaScript code, the , 0 in the reduce function is the initial 
// value for the accumulator (acc). The reduce function in JavaScript takes a 
// callback function as its first argument, and the second argument is the initial 
// value for the accumulator.

// Here's a breakdown of the reduce function:

// javascript

// const total = cart.reduce((acc, product) => acc + product.price, 0);

//     cart: An array of objects representing products.

//     reduce: A higher-order function used to reduce the array to a single value.

//     (acc, product) => acc + product.price: The callback function that is executed on each element of the array. It takes two parameters:
//         acc: The accumulator, which accumulates the partial result.
//         product: The current element being processed in the array.
//         The function adds the price property of each product to the accumulator.

//     , 0: The initial value of the accumulator (acc). In this case, it starts with an initial value of 0. This is important because if you omit this initial value, the first element of the array will be used as the initial value of the accumulator.

// So, the reduce function iterates over the cart array, adding up the prices of each product, and the initial value of the accumulator is set to 0. The final result, total, will be the sum of all the product prices in the cart array.


// const total = cart.reduce(function (acc, product) {
//   return acc + product.price;
// }, 0);

// console.log(total);
