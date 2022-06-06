import añobi from "./añobisiesto";

describe("Saber si un año es bisiesto", () => {
    const  year= new añobi();
  it("deberia devolver true para el año 4", () => {
    expect( year.bisiesto(4)).toEqual("este año es bisiesto");
  });

})