/*
function createPerson (name, lastname) {
    return {
        name,
        lastname
    }
}
*/
const createPerson = (name, lastname) => ({name, lastname})
const person = createPerson("Pepe", "Perez");
console.log(person)

function printArguments() {
    console.log( arguments );
}

const printArguments2 = (age, ...args) => {
    //console.log( args );
    return args;
}

console.log( printArguments(1, 'A', true));
console.log( printArguments2(1, 'A', true));

const { lastname: newLastname } = createPerson('Juan', 'Valdez');
console.log( {newLastname} )

let tony = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    age: 40,
    alive: false,
    coords: {
        lat: 34.034,
        long: -118.70
    },
    suits: ['Mark I', "Mark V", 'Hulkbuster'],
    address: {
        zip: '10880, 90265',
        location: "Malibu, California"
    }
};

const printProperties = ({name, codeName, age = 0, alive}) => {
    console.log({name});
    console.log({codeName});
    console.log({age});
    console.log({alive});
}
printProperties( tony );