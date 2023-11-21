//Function declaration
function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));


// Function expression
const addPlusSign = function (value) {
  return '+' + value
}

console.log(addPlusSign(200));

// Hoisting - process of moving all the function and variable
// declarations to the top of the file before executing. Only
// function declarations are available before the code is 
// executed. Function expressions are not hoisted


// // Function Declaration
// function addDollarSign(value) {
//   return '$' + value;
// }

// // When using declarations, you can invoke the function before the declaration. With expressions, you can not
// console.log(addDollarSign(100));

// // Function Expression
// const addPlusSign = function (value) {
//   return '+' + value;
// };

// console.log(addPlusSign(200));
