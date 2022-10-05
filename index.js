import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
    console.log(state);
    document.querySelector("#root").innerHTML = `
    ${Nav(store.Links)}
    ${Header(state)}
    ${Main(state)}
    ${Footer()}
`;
    router.updatePageLinks();
    afterRender();
}
function afterRender() {
    document
      .querySelector(".fa-bars")
      .addEventListener("click", () =>
        document.querySelector("nav > ul").classList.toggle("hidden--mobile")
      );
  }

router.hooks({
    before: (done, params) => {
      let view = "Home";
      if (params && params.data && params.data.view) {
        view = capitalize(params.data.view);
      }
        done();
      }
    });


router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      console.log(view);
      render(store[view]);
    }
  })
  .resolve();