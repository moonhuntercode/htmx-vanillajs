import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "../counter.js";

import htmx from "htmx.org";
console.log(htmx);
console.log(window.htmx);

window.htmx = htmx;
console.log(window.htmx);
document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <div hx-get="www.thecocktaildb.com/api/json/v1/1/random.php" hx-trigger="load">
  <img  alt="Result loading..." class="htmx-indicator" width="150" src="${viteLogo}"/>
</div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
