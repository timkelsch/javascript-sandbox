let x;

const num = new Number(5.1111);

// toString() - returns a string representation of the number
x = num.toString();
// To get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2); // 5.11

// toPrecision() - returns a number with the specified length
x = num.toPrecision(3); // 5.11

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2); // 5.11x+0

// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US'); // 5.111

// valueOf - Get value
x = num.valueOf(); // 5.1111

// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE; // 1.7976931348623157e+308
x = Number.MIN_VALUE; // 5e-324


console.log(x);