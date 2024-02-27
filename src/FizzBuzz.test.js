import generarFizzBuzz from "./FizzBuzzer.js";

describe("Generar Fizz-Buzz-FizzBuz", () => {
  it("deberia generar el mismo numero para un numero sin regla [1]", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("deberia generar el mismo numero para un numero sin regla [2]", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
});
