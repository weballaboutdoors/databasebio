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
                                  }
                                  else if (view === "Florida") {
                                    axios
                                      .get(`${process.env.FLORIDA_API}`)
                                      .then(response => {
                                        store.Florida.floridas = response.data;
                                        done();
                                      })
                                      .catch(error => {
                                      console.log("Florida not loading", error);
                                      done();
                                      });
                                    }
                                    else if (view === "Georgia") {
                                      axios
                                        .get(`${process.env.GEORGIA_API}`)
                                        .then(response => {
                                          store.Georgia.georgias = response.data;
                                          done();
                                        })
                                        .catch(error => {
                                        console.log("Georgia not loading", error);
                                        done();
                                        });
                                      }
                                      else if (view === "Hawaii") {
                                        axios
                                          .get(`${process.env.HAWAII_API}`)
                                          .then(response => {
                                            store.Hawaii.hawaiis = response.data;
                                            done();
                                          })
                                          .catch(error => {
                                          console.log("Hawaii not loading", error);
                                          done();
                                          });
                                        }
                                        else if (view === "Idaho") {
                                          axios
                                            .get(`${process.env.IDAHO_API}`)
                                            .then(response => {
                                              store.Idaho.idahos = response.data;
                                              done();
                                            })
                                            .catch(error => {
                                            console.log("Idaho not loading", error);
                                            done();
                                            });
                                          }
                                          else if (view === "Illinois") {
                                            axios
                                              .get(`${process.env.ILLINOIS_API}`)
                                              .then(response => {
                                                store.Illinois.illinoiss = response.data;
                                                done();
                                              })
                                              .catch(error => {
                                              console.log("Illinois not loading", error);
                                              done();
                                              });
                                            }
                                            else if (view === "Indiana") {
                                              axios
                                                .get(`${process.env.INDIANA_API}`)
                                                .then(response => {
                                                  store.Indiana.indianas = response.data;
                                                  done();
                                                })
                                                .catch(error => {
                                                console.log("Indiana not loading", error);
                                                done();
                                                });
                                              }
                                              else if (view === "Iowa") {
                                                axios
                                                  .get(`${process.env.IOWA_API}`)
                                                  .then(response => {
                                                    store.Iowa.iowas = response.data;
                                                    done();
                                                  })
                                                  .catch(error => {
                                                  console.log("Iowa not loading", error);
                                                  done();
                                                  });
                                                }
                                                else if (view === "Kansas") {
                                                  axios
                                                    .get(`${process.env.KANSAS_API}`)
                                                    .then(response => {
                                                      store.Kansas.kansass = response.data;
                                                      done();
                                                    })
                                                    .catch(error => {
                                                    console.log("Kansas not loading", error);
                                                    done();
                                                    });}
                                                    else if (view === "Kentucky") {
                                                      axios
                                                        .get(`${process.env.KENTUCKY_API}`)
                                                        .then(response => {
                                                          store.Kentucky.kentuckys = response.data;
                                                          done();
                                                        })
                                                        .catch(error => {
                                                        console.log("Kentucky not loading", error);
                                                        done();
                                                        });
                                                      }
                                                      else if (view === "Louisiana") {
                                                        axios
                                                          .get(`${process.env.LOUISIANA_API}`)
                                                          .then(response => {
                                                            store.Louisiana.louisianas = response.data;
                                                            done();
                                                          })
                                                          .catch(error => {
                                                          console.log("Louisiana not loading", error);
                                                          done();
                                                          });
                                                        }
                                                        else if (view === "Maine") {
                                                          axios
                                                            .get(`${process.env.MAINE_API}`)
                                                            .then(response => {
                                                              store.Maine.maines = response.data;
                                                              done();
                                                            })
                                                            .catch(error => {
                                                            console.log("Maine not loading", error);
                                                            done();
                                                            });
                                                          }
                                                            else if (view === "Maryland") {
                                                              axios
                                                                .get(`${process.env.MARYLAND_API}`)
                                                                .then(response => {
                                                                  store.Maryland.marylands = response.data;
                                                                  done();
                                                                })
                                                                .catch(error => {
                                                                console.log("Maryland not loading", error);
                                                                done();
                                                                });
                                                              }
                                                              else if (view === "Massachusetts") {
                                                                axios
                                                                  .get(`${process.env.MASSACHUSETTS_API}`)
                                                                  .then(response => {
                                                                    store.Massachusetts.massachusettss = response.data;
                                                                    done();
                                                                  })
                                                                  .catch(error => {
                                                                  console.log("Massachusetts not loading", error);
                                                                  done();
                                                                  });
                                                                }
                                                                else if (view === "Michigan") {
                                                                  axios
                                                                    .get(`${process.env.MICHIGAN_API}`)
                                                                    .then(response => {
                                                                      store.Michigan.michigans = response.data;
                                                                      done();
                                                                    })
                                                                    .catch(error => {
                                                                    console.log("Michigan not loading", error);
                                                                    done();
                                                                    });
                                                                  }
                                                                  else if (view === "Minnesota") {
                                                                    axios
                                                                      .get(`${process.env.MINNESOTA_API}`)
                                                                      .then(response => {
                                                                        store.Minnesota.minnesotas = response.data;
                                                                        done();
                                                                      })
                                                                      .catch(error => {
                                                                      console.log("Minnesota not loading", error);
                                                                      done();
                                                                      });
                                                                    }
                                                                    else if (view === "Mississippi") {
                                                                      axios
                                                                        .get(`${process.env.MISSISSIPPI_API}`)
                                                                        .then(response => {
                                                                          store.Mississippi.mississippis = response.data;
                                                                          done();
                                                                        })
                                                                        .catch(error => {
                                                                        console.log("Mississippi not loading", error);
                                                                        done();
                                                                        });
                                                                      }
                                                                      else if (view === "Missouri") {
                                                                        axios
                                                                          .get(`${process.env.MISSOURI_API}`)
                                                                          .then(response => {
                                                                            store.Missouri.missouris = response.data;
                                                                            done();
                                                                          })
                                                                          .catch(error => {
                                                                          console.log("Missouris not loading", error);
                                                                          done();
                                                                          });
                                                                        }
                                                                        else if (view === "Montana") {
                                                                          axios
                                                                            .get(`${process.env.MONTANA_API}`)
                                                                            .then(response => {
                                                                              store.Montana.montanas = response.data;
                                                                              done();
                                                                            })
                                                                            .catch(error => {
                                                                            console.log("Montana not loading", error);
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