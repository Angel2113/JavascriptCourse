import {heroes} from "../data/heroes.js";
/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = ( element ) => {
    const id = "5d86371f1efebc31def272e2";
    findHero( id, ( error, hero ) => {

       if ( error ){
           element.innerHTML = error
           return;
       }
       element.innerHTML = hero?.name || "Heroe not found";
    });
}

/**
 *
 * @param { string } id
 * @param { ( error?: String|Null, hero: Object) => void }callback
 */
const findHero = ( id, callback) => {
   const hero = heroes.find( hero => hero.id === id);

    if ( !hero ) {
        callback( `Hero with id: ${ id } not found` )
        return;
    }

   callback(null, hero );
}