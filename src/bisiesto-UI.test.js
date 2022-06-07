import fs from "fs";
describe("Año bisiesto html", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });  
  it("Si el año es 4 dice que es bisiesto", () => {
    const year = document.querySelector("#years");
    year.value=4;
    const boton = document.querySelector("#botoncalcular");
    boton.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("este año es bisiesto");
  });
  it("Si el año es 9 dice que no es bisiesto", () => {
    const year = document.querySelector("#years");
    year.value=9;
    const boton = document.querySelector("#botoncalcular");
    boton.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("este año no es bisiesto");
  });
  it("Si el año es 2022 dice que no es bisiesto", () => {
    const year = document.querySelector("#years");
    year.value=2022;
    const boton = document.querySelector("#botoncalcular");
    boton.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("este año no es bisiesto");
  });
});