import añobi from "./bisiesto";

describe("Saber si un año es bisiesto", () => {
    const  year= new añobi();
  it("deberia devolver este año es bisiesto para el año 4", () => {
    expect( year.bisiesto(4)).toEqual("este año es bisiesto");
  });
  it("deberia devolver este año no es bisiesto para el año 5", () => {
    expect( year.bisiesto(5)).toEqual("este año no es bisiesto");
  })
  it("deberia devolver este año es bisiesto para el año 8", () => {
    expect( year.bisiesto(8)).toEqual("este año es bisiesto");
  });
  it("deberia devolver este año es bisiesto para el año 12", () => {
    expect( year.bisiesto(12)).toEqual("este año es bisiesto");
  });
})