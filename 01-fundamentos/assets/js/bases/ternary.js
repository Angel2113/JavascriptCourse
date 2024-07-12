/**
 * Weekdays we open at 11
 * weekends we open at 9
 */

//
const day = 1; // 0: domingo... 1:Lunes....
const CurrentTime = 10;


let openTime;
let message;

// if ( day === 0 || day === 6 ) {
// if ( [0,6].includes( dia ) ) { 
//     console.log('Weekend');
//     openTime = 9;
// } else {
//     console.log('Weekday');
//     openTime = 11;
// }
openTime = ( [0,6].includes( day ) ) ? 9 : 11;


// if ( CurrentTime >= openTime ) {
//     msg = 'It's open';
// } else {
//     msg = `it's closed we open at ${ openTime }`;
// }

msg = ( CurrentTime >= openTime ) ? "it's open" : `it's closed, we open at ${ openTime }`;


console.log({ openTime, msg });