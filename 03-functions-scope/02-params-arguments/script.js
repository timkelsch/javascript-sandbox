// Default Params
function registerUser(user = 'Bot') {
  // Old way - before using `=`
  // if (!user) {
  //   user = 'Bot';
  // }

  return user + ' is registered';
}

//console.log(registerUser());

function sum(...numbers) {
  let total = 0
  for (const num of numbers) {
    total += num
  }
  return total
}

console.log(sum(1,2,3,4,45));


function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`

}

const user = {
  id: 1,
  name: 'Dick'
}

console.log(loginUser(user));
console.log(loginUser({
  id: 2,
  name: 'dave'
}));

// Arrays as parameters
function getRandom(arr) {
  const r = Math.floor(Math.random() * arr.length)
  const item = arr[r]
  console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,9])





// Rest Params
// function sum(...numbers) {
//   let total = 0;

//   for (const num of numbers) {
//     total += num;
//   }

//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 100));

// // Objects as params
// function loginUser(user) {
//   return `The user ${user.name} with the id of ${user.id} is logged in`;
// }

// const user = {
//   id: 1,
//   name: 'John',
// };

// console.log(loginUser(user));
// console.log(
//   loginUser({
//     id: 2,
//     name: 'Sara',
//   })
// );

// // Arrays as params
// function getRandom(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   const item = arr[randomIndex];

//   console.log(item);
// }

// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
