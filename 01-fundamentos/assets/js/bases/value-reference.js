let a = 10;
let b = a;

console.log({a, b});


// Objects are passed by reference
let juan = { name: 'Juan'};
let ana = {...juan};
ana.name = 'ana';
console.log({ana, juan});

const updateName = ({...person}) => {
    person.name = 'Tony';
    return person
}

let peter = { name: 'Peter'}
let tony = updateName( peter )
console.log({peter, tony});

// Arrays
const fruits = ['Apple', 'Pineapple', 'Strawberry'];
const otherFruits = [fruits]

otherFruits.push('Mango');
console.log({ fruits, otherFruits})

console.time('slice')
const  fruits2 = fruits.slice()
console.timeEnd('slice')

console.time('spread')
const  fruits3 = [...fruits]
console.timeEnd('spread')
