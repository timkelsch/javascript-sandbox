//let amount = "100"
//let amount = 100

// Convert string to number
//amount = parseInt(amount)
//amount = +amount
//amount = Number(amount)

// Convert number to string
// Primitives do not have methods
// JS auto creates a temporary object wrapper for it here
// amount = amount.toString();
// amount = String(amount)

// let amount = '99.5'

// Convert string to decimal
// amount = parseFloat(amount) // works

// let amount = 1;
// convert number to bool
// amount = Boolean(amount) // true

let amount = 'hello'
amount = parseInt(amount) // NaN
amount = Math.sqrt(-1) // NaN
amount = 1 + NaN // NaN
amount = undefined + undefined // NaN
amount = 'foo' / 3 // NaN

console.log(amount, typeof amount);