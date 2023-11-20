// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};



// console.log(person);

// // Destructuring object properties

const todo = {
  id: 1,
  title: 'Trash',
  user: {
    name: 'John'
  }
}

const { id, title, user: {name} } = todo;

//console.log(name);

// Destructure arrays
const numbers = [1,2,3,4,5,6]

const [first, second, ...rest] = numbers

console.log(first, second, rest);

// const todo = {
//   id: 1,
//   title: 'Take out trash',
//   user: {
//     name: 'John',
//   },
// };

// const {
//   id: todoId, // rename id to todoId
//   title,
//   user: { name }, // destructuring multiple levels
// } = todo;

// console.log(todoId);

// // Destructuring arrays & using the rest/spread operator
// const numbers = [23, 67, 33, 49, 52];

// const [first, second, ...rest] = numbers;

// console.log(first, second, rest);
