const arr = new Array(10);
const arr1 = [];

let videoGames = ['Megaman', 'Mario 3', 'Spiderman'];

videoGames.forEach((element, index, arr) => {
    console.log( {index, element, arr} )
});

let newLenth = videoGames.push("Zelda");
console.log({ newLenth, videoGames });

videoGames.unshift("Megaman");          // Add one or more elements at the begining of the array
console.log({ newLenth, videoGames });

// Erase from a to b and return an array
let eraseGames = videoGames.splice(1, 2);
console.log( eraseGames, videoGames)

let index = videoGames.indexOf('Mario 3');
console.log( index );
