const age = 24
const name = 'John Doe'

function Greet(...args) {
    const [msg, name, age] = args;
    console.log(`${msg}, ${name}! You are ${age} years old.`);
}

Greet("hey","sahil","22")

let sum = (a, b) => a + b

console.log(sum(5, 10));