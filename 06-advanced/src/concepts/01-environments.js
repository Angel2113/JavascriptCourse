/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentComponent = ( element ) => {

    console.log( import.meta.env );

    const html = ` 
        Dev: ${ import.meta.env.DEV }
        Dev: ${ import.meta.env.PROD }
        Dev: ${ import.meta.env.VITE_API_KEY }
    `;
    element.innerHTML = html;
}