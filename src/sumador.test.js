import sumar from "./sumador.js";
import generarFizzBuzz from "./FizzBuzzer.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
describe("Generar Fizz-Buzz-FizzBuz", () => {
  it("deberia generar el mismo numero para un numero sin regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
});