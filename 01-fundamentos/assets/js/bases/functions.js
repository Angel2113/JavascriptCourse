function greet( name ) {
    console.log("Hello ", name);
    return 1;
}

// Anonymous function
const greet2 = function() {
    console.log('Hello word')
}

const greet3 = () => {
    console.log(" Hello 3");
}

const add = (a, b) => a+b;

const getRandom = () => Math.random();

console.log( getRandom() )

greet('Pepe');