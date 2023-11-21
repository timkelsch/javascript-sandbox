// Avoid global scope pollution with immediately invoked 
// function expressions


(function () {
  const user = 'Brad'
  console.log(user);
  const hello = () => console.log('Hello from IIFE');
  hello() // run here to avoid global scope
})();

(function (name) {
  console.log('Hello ' + name);
})('Shawn')

// Don't see this because you can't call it anywhere else
(function hello() {
  console.log('Hello');
})()



// // IFFE Syntax (Has it's own scope and runs right away)
// (function () {
//   const user = 'John';
//   console.log(user);
//   const hello = () => console.log('Hello from the IIFE');
//   hello();
// })();

// // Params
// (function (name) {
//   console.log('Hello ' + name);
// })('Shawn');

// // Named IIFE (Can only be called recursively)
// (function hello() {
//   console.log('Hello');
// })();
