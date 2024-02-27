import { generarFizzBuzz, generarSecuencia } from "./FizzBuzzer.js";

const form = document.querySelector("#number-form");
const number = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + generarSecuencia(parseInt(number.value)) + "</p>";
});
