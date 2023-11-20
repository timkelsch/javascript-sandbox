// Ways to declare a variable
// var, let, const

// global scope: var and let work similarly

let firstName = 'Tim';
let lastName = 'Doe'; 

console.log(firstName, lastName) 

let age = 30
console.log(age);

// Nameing conventions
//  - Only letters, numbers, underscores, dollar signs
//  - can't start with number

// Re-assigning variables

age = 31; 
console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100

// must initialize consts
// const score1;

// can't reassign array
const arr = [1,2,3,4]
// arr = [1,2,3,4,5]

arr.push(5)
console.log(arr);

const person = {
    name: 'Brad'
}

//Can't reassign, but can update the property by reference
person.Name = 'Dick'

person.email = 'dick@gmzil.com'

console.log(person);

// always use const unless you know it's something you're going to change

// Declare multiple vars at once

let a, b, c

const d = 10, e = 20, f = 30

console.log(d, e, f);