import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

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
      if (view === "Alabama") {
        axios
          .get(`${process.env.ALABAMA_API}`)
          .then(response => {
            store.Alabama.alabamas = response.data;
            done();
          })
          .catch(error => {
            console.log("Alabama not loading", error);
            done();
          });
        }
        else if (view === "Alaska") {
            axios
              .get(`${process.env.ALASKA_API}`)
              .then(response => {
                store.Alaska.alaskas = response.data;
                done();
              })
              .catch(error => {
                console.log("Alaska not loading", error);
                done();
              });
            }
            else if (view === "Arizona") {
              axios
              .get(`${process.env.ARIZONA_API}`)
              .then(response => {
                  store.Arizona.arizonas = response.data;
                  done();
                })
                .catch(error => {
                  console.log("Arizona not loading", error);
                done();
                });
                }
                else if (view === "California") {
                  axios
                  .get(`${process.env.CALIFORNIA_API}`)
                  .then(response => {
                    store.California.californias = response.data;
                    done();
                  })
                    .catch(error => {
                      console.log("California not loading", error);
                      done();
                    });
                    }
                    else if (view === "Colorado") {
                      axios
                        .get(`${process.env.COLORADO_API}`)
                        .then(response => {
                          store.Colorado.colorados = response.data;
                          done();
                        })
                        .catch(error => {
                        console.log("Colorado not loading", error);
                          done();
                        });
                        }
                        else if (view === "Connecticut") {
                          axios
                            .get(`${process.env.CONNECTICUT_API}`)
                            .then(response => {
                              store.Connecticut.connecticuts = response.data;
                              done();
                            })
                            .catch(error => {
                            console.log("Connecticut not loading", error);
                            done();
                            });
                          }
                            else if (view === "Delaware") {
                              axios
                                .get(`${process.env.DELAWARE_API}`)
                                .then(response => {
                                  store.Delaware.delawares = response.data;
                                  done();
                                })
                                .catch(error => {
                                console.log("Delaware not loading", error);
                                done();
                                });
                              }
                                else if (view === "Districtofcolumbia") {
                                  axios
                                    .get(`${process.env.DISTRICTOFCOLUMBIA_API}`)
                                    .then(response => {
                                      store.Districtofcolumbia.distictofcolumbias = response.data;
                                      done();
                                    })
                                    .catch(error => {
                                    console.log("District of Columbia not loading", error);
                                    done();
                                    });
      } else {
        done();
      }
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