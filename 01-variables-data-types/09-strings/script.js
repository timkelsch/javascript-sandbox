// When we execute methods on primitives, JS creates a temp wrapper object

let x

const name = 'Tim'
const age = 43

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old.'

// Template literals from ES6 (2015)
x = `Hello my name is ${name} and I am ${age} years old.` // Same as above

// String Properties and Methods
const s = 'Hello World'
// same as 
// const s = new String('Hello World')

x = typeof s;

x = s.length // 11

// Access value by index
x = s[4] // o

x = s.__proto__ // shows all the properties of s

x = s.toUpperCase() //  HELLO WORLD
x = s.toLowerCase() // hello world

x = s.charAt(0) // H

x = s.indexOf('e') // 1 - first instance

x = s.substring(0, 4) // Hell
x = s.substring(7) // orld
x = s.slice(-9) // llo World
x = s.slice(-9, -5) // llo

x = '      Hello'
x = x.trim() // Hello

x = s.replace('llo', 'rro')  // Herro World

x = s.includes('Hello') // true

x = s.valueOf() // Hello World

x = s.split() // Array [ "Hello World" ]

x = s.split(' ') // Array [ "Hello", "World" ]

x = s.split('') // Array(11) [ "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", … ]


console.log(x);