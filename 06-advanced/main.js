import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {environmentComponent} from "./src/concepts/01-environments.js";
import {callbacksComponent} from "./src/concepts/02-callbacks.js";
import {promiseComponent} from "./src/concepts/03-promises.js";
import {forAwaitComponent} from "./src/concepts/08-for-await.js";
import {generatorFunctionsComponent} from "./src/concepts/09-generators.js";
import {generatorsAsyncComponent} from "./src/concepts/10-generators-async.js";

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>`;

const element = document.querySelector('.read-the-docs');
generatorsAsyncComponent( element );