const x = 100;

if(true) {
  const y = 200
  console.log(x + y);
}

//doesnt work
//console.log(x + y);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//console.log(i);

if (true) {
  const a = 500
  let b = 600
  var c = 700
}

// var variables are not block scoped but ARE function scoped
// var variables are global and added to the window object 
// you usually do not want this
console.log(c);

// An If statement is a block
// if (true) {
//   console.log(x);
//   const y = 200;
//   console.log(x + y);
// }

// // console.log(y); // ReferenceError: y is not defined

// // A loop is a block
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // console.log(i); // ReferenceError: i is not defined

// // Using var
// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;
// }

// console.log(c);

// // var IS function scoped
// function run() {
//   var d = 100;
//   console.log(d);
// }

// run();

// // console.log(d);


// const foo = 1;
// var bar = 2; // Put on the window object
