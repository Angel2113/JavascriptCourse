import { shuffle } from "underscore";

/**
 *
 * @param types
 * @param additionalCards
 * @returns {*}
 */
export const createDeck = (types, additionalCards) => {
    let deck = []
    for( let i = 2; i <= 10; i++ ){
        for(let t of types) {
            deck.push( i + t);
        }
    }

    for(let t of types) {
        for(let additional of additionalCards) {
            deck.push( additional + t);
        }
    }
    return _.shuffle( deck );
}