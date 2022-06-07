import yearbisiesto from "./bisiesto";


const year = document.querySelector("#years");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");
const yearBisiesto = new yearbisiesto();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const thisyear = Number.parseInt(year.value);
  let respuesta = yearBisiesto.bisiesto(thisyear);  
  div.innerHTML = respuesta  
});

