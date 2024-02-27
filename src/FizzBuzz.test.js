import generarFizzBuzz from "./FizzBuzzer.js";

describe("Generar Fizz-Buzz-FizzBuz", () => {
  it("deberia generar el mismo numero para un numero sin regla [1]", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("deberia generar el mismo numero para un numero sin regla [2]", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  it("deberia generar Fizz para un numero multiplo de 3 [3]", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });
  it("deberia generar Fizz para un numero multiplo de 3 [6]", () => {
    expect(generarFizzBuzz(6)).toEqual("Fizz");
  });
});