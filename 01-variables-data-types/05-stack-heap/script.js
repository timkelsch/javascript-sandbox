// Values are store on the stack 
const name = 'Jon'
const age = 30

// Reference values are stored on the heap
const person = {
    name: 'Tim',
    age: 43
}

let newName = name;
newName = 'Timothy'

let newPerson = person;
newPerson.name = 'Dock'

console.log(name, newName);
console.log(person, newPerson);

// if you a variable A assigned to an object variable B
// when you change an attribute of A, it changes the 
// attribute value of B as well since it's on the heap