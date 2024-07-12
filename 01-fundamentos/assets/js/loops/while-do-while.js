

const brands = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while( i < brands.length ) {
//     console.log( brands[i] );
//     // i = i + 1;
//     i++;
// }

console.warn('While')
// undefined
// null
// false
while( brands[i] ) {
    if ( i === 1 ){
        // break;
        i++;
        continue;
    }
    
    console.log( brands[i] );
    i++;
}


console.warn('Do While');
let j = 10;

do {
    console.log( brands[j]);
    j++;
} while( brands[j] );

