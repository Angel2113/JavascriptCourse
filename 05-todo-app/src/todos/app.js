import html from './app.html?raw';

/**
 *
 * @param {string} elememntId
 * @constructor
 */
export const App = ( elememntId) => {

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elememntId).append(app);
    })();
}