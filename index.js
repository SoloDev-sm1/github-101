const age = 24
const name = 'John Doe'

function Greet(...args) {
    const [msg, name, age] = args;
    console.log(`${msg}, ${name}! You are ${age} years old.`);
}

Greet("hey","sweety","22")
Greet("hey","sahil","23")

let sum = (a, b) => a + b

console.log(sum(5, 10));