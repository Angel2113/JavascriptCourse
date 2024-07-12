
const mayor = (a, b) => (a > b) ? a : b;

const isMember = ( member ) => (member) ? '2 Dollars' : '10 Dollars';


console.log( mayor(20, 15) );
console.log( isMember(false) );

const friend = false;
const friends = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki',
    // (()=> 'Nick Fury')()
    mayor(10, 15)
];

console.log( friends );


const note = 82.5; // A+ A B+
const grade = note >= 95 ? 'A+' :
    note >= 90 ? 'A'  :
    note >= 85 ? 'B+' :
    note >= 80 ? 'B'  :
    note >= 75 ? 'C+' :
    note >= 70 ? 'C'  : 'F';

console.log({ note, grade });



