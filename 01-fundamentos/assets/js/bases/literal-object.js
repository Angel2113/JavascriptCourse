let character = {
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
console.log("name ", character.name);

delete character.age
console.log( character);

const entriesPair  = Object.entries( character);
Object.freeze( character );
character.money = 1000000000;
console.log(entriesPair);

const properties = Object.getOwnPropertyNames( character );
const valuess = Object.values( character );

console.log( {properties, valuess } )
