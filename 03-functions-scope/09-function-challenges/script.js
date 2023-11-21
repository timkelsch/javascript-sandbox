
function getCelsius0(temp) {
  return (temp - 32) * (5/9)
}

const getCelsius = temp => (temp - 32) * (5/9)

console.log(`The temperature is ${getCelsius(32)}\xB0c`);

const minMax = arr => ({ min: Math.min(...arr), max: Math.max(...arr) })

console.log(minMax([1,2,3,4,5,6,7,8]));

(function output(length, width) {
  const area = length * width;
  console.log(`The area of a rectangle with length of ${length} and width of ${width} is ${area}.`);
})(5, 6)

// // Challenge 1
// // function getCelsius(f) {
// //   const celsius = ((f - 32) * 5) / 9;
// //   return celsius;
// // }

// const getCelsius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temp is ${getCelsius(35)} \xB0C `);

// // Challenge 2
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max,
//   };
// }

// console.log(minMax([2, 31, 4, 5, 6]));

// // Challenge 3
// ((length, width) => {
//   const area = length * width;

//   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

//   console.log(output);
// })(20, 10);
