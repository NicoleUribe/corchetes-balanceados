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

});