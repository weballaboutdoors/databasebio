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
    afterRender(state);
}
function afterRender(state) {
    document
      .querySelector(".fa-bars")
      .addEventListener("click", () => 
        document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
    if (state.view === "Customer") {
      document.querySelector("form").addEventListener("submit", event => {
        console.log(event);
        event.preventDefault();
        const inputList = event.target.elements;
  
        
        const requestData = {
          customer: inputList.customer.value,
          company: inputList.company.value,
          email: inputList.email.value,
          feedback: inputList.feedback.value
        };
  
        axios
          .post(`${process.env.CUSTOMER_API}`, requestData)
          .then(response => {
            console.log(response.data);
            store.Customer.customers.push(response.data);
            router.navigate("/Submission");
          })
          .catch(error => {
            alert("Please fill out requirements");
            console.log("It didn't submit", error);
          });
      });
    }
    if (state.view === "Installer"){
      document.querySelector("form").addEventListener("submit", event => {
        console.log(event);
        event.preventDefault();
        const installerList = event.target.elements;

        const professionSubmission = [];
        for (let input of installerList.professionSubmission){
          if (input.checked) {
            professionSubmission.push(input.value);
          }
        }

        const installerData = {
          companynameSubmission: installerList.companynameSubmission.value,
          addressSubmission: installerList.addressSubmission.value,
          citySubmission: installerList.citySubmission.value,
          stateSubmission: installerList.stateSubmission.value,
          zipcodeSubmission: installerList.zipcodeSubmission.value,
          phoneSubmission: installerList.phoneSubmission.value,
          emailSubmission: installerList.emailSubmission.value,
          webSubmission: installerList.webSubmission.value,
          bioSubmission: installerList.bioSubmission.value,
          reviewSubmission: installerList.reviewSubmission.value,
          otherSubmission: installerList.otherSubmission.value,
          yearSubmission: installerList.yearSubmission.value,
          insuranceSubmission: installerList.insuranceSubmission.value,
          instypeSubmission: installerList.instypeSubmission.value,
          licenseSubmission: installerList.licenseSubmission.value,
          lictypeSubmission: installerList.lictypeSubmission.value,
          professionSubmission: professionSubmission
        };

        axios
          .post(`${process.env.INSTALLER_API}`, installerData)
          .then(response => {
            console.log(response.data);
            store.Installer.installers.push(response.data);
            router.navigate("/Submission");
          })
          .catch(error => {
            alert("Please fill out requirements");
            console.log("It didn't submit", error);
          });
      });
    }
    if (state.view === "Update"){
      document.querySelector("form").addEventListener("submit", event => {
        console.log(event);
        event.preventDefault();
        const updateList = event.target.elements;

        const professionUpdate = [];
        for (let input of updateList.professionUpdate){
          if (input.checked) {
            professionUpdate.push(input.value);
          }
        }

        const updateData = {
          companynameUpdate: updateList.companynameUpdate.value,
          stateUpdate: updateList.stateUpdate.value,
          emailUpdate: updateList.emailUpdate.value,
          bioUpdate: updateList.bioUpdate.value,
          addotherUpdate: updateList.addotherUpdate.value,
          removeotherUpdate: updateList.removeotherUpdate.value,
          professionUpdate: professionUpdate
        };

        axios
          .post(`${process.env.UPDATE_API}`, updateData)
          .then(response => {
            console.log(response.data);
            store.Update.updates.push(response.data);
            router.navigate("/Submission");
          })
          .catch(error => {
            alert("Please fill out requirements");
            console.log("It didn't submit", error);
          });
      });
    }
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
              else if (view === "Arkansas") {
                axios
                .get(`${process.env.ARKANSAS_API}`)
                .then(response => {
                    store.Arkansas.arkansass = response.data;
                    done();
                  })
                  .catch(error => {
                    console.log("Arkansas not loading", error);
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
                                      store.Districtofcolumbia.districtofcolumbias = response.data;
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
                                                                          }
                                                                          else if (view === "Nebraska") {
                                                                            axios
                                                                              .get(`${process.env.NEBRASKA_API}`)
                                                                              .then(response => {
                                                                                store.Nebraska.nebraskas = response.data;
                                                                                done();
                                                                              })
                                                                              .catch(error => {
                                                                              console.log("Nebraska not loading", error);
                                                                              done();
                                                                              });
                                                                            }
                                                                            else if (view === "Nevada") {
                                                                              axios
                                                                                .get(`${process.env.NEVADA_API}`)
                                                                                .then(response => {
                                                                                  store.Nevada.nevadas = response.data;
                                                                                  done();
                                                                                })
                                                                                .catch(error => {
                                                                                console.log("Nevada not loading", error);
                                                                                done();
                                                                                });
                                                                              }
                                                                              else if (view === "Newhampshire") {
                                                                                axios
                                                                                  .get(`${process.env.NEWHAMPSHIRE_API}`)
                                                                                  .then(response => {
                                                                                    store.Newhampshire.newhampshires = response.data;
                                                                                    done();
                                                                                  })
                                                                                  .catch(error => {
                                                                                  console.log("New Hampshire not loading", error);
                                                                                  done();
                                                                                  });
                                                                                }
                                                                                else if (view === "Newjersey") {
                                                                                  axios
                                                                                    .get(`${process.env.NEWJERSEY_API}`)
                                                                                    .then(response => {
                                                                                      store.Newjersey.newjerseys = response.data;
                                                                                      done();
                                                                                    })
                                                                                    .catch(error => {
                                                                                    console.log("New Jersey not loading", error);
                                                                                    done();
                                                                                    });
                                                                                  }
                                                                                  else if (view === "Newmexico") {
                                                                                    axios
                                                                                      .get(`${process.env.NEWMEXICO_API}`)
                                                                                      .then(response => {
                                                                                        store.Newmexico.newmexicos = response.data;
                                                                                        done();
                                                                                      })
                                                                                      .catch(error => {
                                                                                      console.log("New Mexico not loading", error);
                                                                                      done();
                                                                                      });
                                                                                    }
                                                                                    else if (view === "Newyork") {
                                                                                      axios
                                                                                        .get(`${process.env.NEWYORK_API}`)
                                                                                        .then(response => {
                                                                                          store.Newyork.newyorks = response.data;
                                                                                          done();
                                                                                        })
                                                                                        .catch(error => {
                                                                                        console.log("New York not loading", error);
                                                                                        done();
                                                                                        });
                                                                                      }
                                                                                      else if (view === "Northcarolina") {
                                                                                        axios
                                                                                          .get(`${process.env.NORTHCAROLINA_API}`)
                                                                                          .then(response => {
                                                                                            store.Northcarolina.northcarolinas = response.data;
                                                                                            done();
                                                                                          })
                                                                                          .catch(error => {
                                                                                          console.log("North Carolina not loading", error);
                                                                                          done();
                                                                                          });
                                                                                        }
                                                                                        else if (view === "Northdakota") {
                                                                                          axios
                                                                                            .get(`${process.env.NORTHDAKOTA_API}`)
                                                                                            .then(response => {
                                                                                              store.Northdakota.northdakotas = response.data;
                                                                                              done();
                                                                                            })
                                                                                            .catch(error => {
                                                                                            console.log("North Dakota not loading", error);
                                                                                            done();
                                                                                            });
                                                                                          }
                                                                                          else if (view === "Ohio") {
                                                                                            axios
                                                                                              .get(`${process.env.OHIO_API}`)
                                                                                              .then(response => {
                                                                                                store.Ohio.ohios = response.data;
                                                                                                done();
                                                                                              })
                                                                                              .catch(error => {
                                                                                              console.log("Ohio not loading", error);
                                                                                              done();
                                                                                              });
                                                                                            }
                                                                                            else if (view === "Oklahoma") {
                                                                                              axios
                                                                                                .get(`${process.env.OKLAHOMA_API}`)
                                                                                                .then(response => {
                                                                                                  store.Oklahoma.oklahomas = response.data;
                                                                                                  done();
                                                                                                })
                                                                                                .catch(error => {
                                                                                                console.log("Oklahoma not loading", error);
                                                                                                done();
                                                                                                });
                                                                                              }
                                                                                              else if (view === "Oregon") {
                                                                                                axios
                                                                                                  .get(`${process.env.OREGON_API}`)
                                                                                                  .then(response => {
                                                                                                    store.Oregon.oregons = response.data;
                                                                                                    done();
                                                                                                  })
                                                                                                  .catch(error => {
                                                                                                  console.log("Oregon not loading", error);
                                                                                                  done();
                                                                                                  });
                                                                                                }
                                                                                                else if (view === "Pennsylvania") {
                                                                                                  axios
                                                                                                    .get(`${process.env.PENNSYLVANIA_API}`)
                                                                                                    .then(response => {
                                                                                                      store.Pennsylvania.pennsylvanias = response.data;
                                                                                                      done();
                                                                                                    })
                                                                                                    .catch(error => {
                                                                                                    console.log("Pennsylvania not loading", error);
                                                                                                    done();
                                                                                                    });
                                                                                                  }
                                                                                                  else if (view === "Rhodeisland") {
                                                                                                    axios
                                                                                                      .get(`${process.env.RHODEISLAND_API}`)
                                                                                                      .then(response => {
                                                                                                        store.Rhodeisland.rhodeislands = response.data;
                                                                                                        done();
                                                                                                      })
                                                                                                      .catch(error => {
                                                                                                      console.log("Rhode Island not loading", error);
                                                                                                      done();
                                                                                                      });
                                                                                                    }
                                                                                                    else if (view === "Southcarolina") {
                                                                                                      axios
                                                                                                        .get(`${process.env.SOUTHCAROLINA_API}`)
                                                                                                        .then(response => {
                                                                                                          store.Southcarolina.southcarolinas = response.data;
                                                                                                          done();
                                                                                                        })
                                                                                                        .catch(error => {
                                                                                                        console.log("South Carolina not loading", error);
                                                                                                        done();
                                                                                                        });
                                                                                                      }
                                                                                                      else if (view === "Southdakota") {
                                                                                                        axios
                                                                                                          .get(`${process.env.SOUTHDAKOTA_API}`)
                                                                                                          .then(response => {
                                                                                                            store.Southdakota.southdakotas = response.data;
                                                                                                            done();
                                                                                                          })
                                                                                                          .catch(error => {
                                                                                                          console.log("South Dakota not loading", error);
                                                                                                          done();
                                                                                                          });
                                                                                                        }
                                                                                                        else if (view === "Tennessee") {
                                                                                                          axios
                                                                                                            .get(`${process.env.TENNESSEE_API}`)
                                                                                                            .then(response => {
                                                                                                              store.Tennessee.tennessees = response.data;
                                                                                                              done();
                                                                                                            })
                                                                                                            .catch(error => {
                                                                                                            console.log("Tennessee not loading", error);
                                                                                                            done();
                                                                                                            });
                                                                                                          }
                                                                                                          else if (view === "Texas") {
                                                                                                            axios
                                                                                                              .get(`${process.env.TEXAS_API}`)
                                                                                                              .then(response => {
                                                                                                                store.Texas.texass = response.data;
                                                                                                                done();
                                                                                                              })
                                                                                                              .catch(error => {
                                                                                                              console.log("Texas not loading", error);
                                                                                                              done();
                                                                                                              });}
                                                                                                              else if (view === "Utah") {
                                                                                                                axios
                                                                                                                  .get(`${process.env.UTAH_API}`)
                                                                                                                  .then(response => {
                                                                                                                    store.Utah.utahs = response.data;
                                                                                                                    done();
                                                                                                                  })
                                                                                                                  .catch(error => {
                                                                                                                  console.log("Utah not loading", error);
                                                                                                                  done();
                                                                                                                  });
                                                                                                                }
                                                                                                                else if (view === "Vermont") {
                                                                                                                  axios
                                                                                                                    .get(`${process.env.VERMONT_API}`)
                                                                                                                    .then(response => {
                                                                                                                      store.Vermont.vermonts = response.data;
                                                                                                                      done();
                                                                                                                    })
                                                                                                                    .catch(error => {
                                                                                                                    console.log("Vermont not loading", error);
                                                                                                                    done();
                                                                                                                    });
                                                                                                                  }
                                                                                                                  else if (view === "Virginia") {
                                                                                                                    axios
                                                                                                                      .get(`${process.env.VIRGINIA_API}`)
                                                                                                                      .then(response => {
                                                                                                                        store.Virginia.virginias = response.data;
                                                                                                                        done();
                                                                                                                      })
                                                                                                                      .catch(error => {
                                                                                                                      console.log("Virginia not loading", error);
                                                                                                                      done();
                                                                                                                      });
                                                                                                                    }
                                                                                                                    else if (view === "Washington") {
                                                                                                                      axios
                                                                                                                        .get(`${process.env.WASHINGTON_API}`)
                                                                                                                        .then(response => {
                                                                                                                          store.Washington.washingtons = response.data;
                                                                                                                          done();
                                                                                                                        })
                                                                                                                        .catch(error => {
                                                                                                                        console.log("Washington not loading", error);
                                                                                                                        done();
                                                                                                                        });
                                                                                                                      }
                                                                                                                      else if (view === "Westvirginia") {
                                                                                                                        axios
                                                                                                                          .get(`${process.env.WESTVIRGINIA_API}`)
                                                                                                                          .then(response => {
                                                                                                                            store.Westvirginia.westvirginias = response.data;
                                                                                                                            done();
                                                                                                                          })
                                                                                                                          .catch(error => {
                                                                                                                          console.log("West Virginia not loading", error);
                                                                                                                          done();
                                                                                                                          });
                                                                                                                        }
                                                                                                                        else if (view === "Wisconsin") {
                                                                                                                          axios
                                                                                                                            .get(`${process.env.WISCONSIN_API}`)
                                                                                                                            .then(response => {
                                                                                                                              store.Wisconsin.wisconsins = response.data;
                                                                                                                              done();
                                                                                                                            })
                                                                                                                            .catch(error => {
                                                                                                                            console.log("Wisconsin not loading", error);
                                                                                                                            done();
                                                                                                                            });
                                                                                                                          }
                                                                                                                          else if (view === "Wyoming") {
                                                                                                                            axios
                                                                                                                              .get(`${process.env.WYOMING_API}`)
                                                                                                                              .then(response => {
                                                                                                                                store.Wyoming.wyomings = response.data;
                                                                                                                                done();
                                                                                                                              })
                                                                                                                              .catch(error => {
                                                                                                                              console.log("Wyoming not loading", error);
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
