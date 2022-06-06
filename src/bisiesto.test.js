import añobi from "./añobisiesto";

describe("Saber si un año es bisiesto", () => {
    const  year= new añobi();
  it("deberia devolver true para el año 4", () => {
    expect( year.bisiesto(4)).toEqual("este año es bisiesto");
  });
  it("deberia devolver false para el año 5", () => {
    expect( year.bisiesto(5)).toEqual("este año no es bisiesto");
  });
})