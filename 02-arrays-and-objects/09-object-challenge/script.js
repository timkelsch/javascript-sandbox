const library = [
  {
    title: 'asdf',
    author: 'james',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'poo',
    author: 'dave',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'pee',
    author: 'bill',
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
]

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

const { title: firstbook } = library[0]

const JSONstring = JSON.stringify(library)
const libraryJSON = JSON.parse([JSONstring])

console.log(JSONstring);
console.log(libraryJSON);

// // Step 1
// const library = [
//   {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: 'Mockingjay',
//     author: 'Suzanne Collins',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
// ];

// // Step 2
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// // Step 3
// const { title: firstBook } = library[0];

// console.log(firstBook);

// // Step 4
// const libraryJSON = JSON.stringify(library);

// console.log(libraryJSON);
