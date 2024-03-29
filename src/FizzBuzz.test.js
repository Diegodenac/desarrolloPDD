import { generarFizzBuzz, generarSecuencia } from "./FizzBuzzer.js";

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
  it("deberia generar Buzz para un numero multiplo de 5 [5]", () => {
    expect(generarFizzBuzz(5)).toEqual("Buzz");
  });
  it("deberia generar Buzz para un numero multiplo de 5 [10]", () => {
    expect(generarFizzBuzz(10)).toEqual("Buzz");
  });
  it("deberia generar FizzBuzz para un numero multiplo de 3 y 5 [15]", () => {
    expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
  });
  it("deberia generar FizzBuzz para un numero multiplo de 3 y 5 [30]", () => {
    expect(generarFizzBuzz(30)).toEqual("FizzBuzz");
  });
});

describe("Generar secuencia Fizz-Buzz-FizzBuz", () => {
  it("deberia generar una secuencia hasta el mismo numero para un numero sin regla [1]", () => {
    expect(generarSecuencia(1)).toEqual("1");
  });
  it("deberia generar una secuencia hasta el mismo numero para un numero sin regla [2]", () => {
    expect(generarSecuencia(2)).toEqual("1, 2");
  });
  it("deberia generar una secuencia hasta Fizz para un numero multiplo de 3 [3]", () => {
    expect(generarSecuencia(3)).toEqual("1, 2, Fizz");
  });
  it("deberia generar una secuencia hasta Buzz para un numero multiplo de 5 [5]", () => {
    expect(generarSecuencia(5)).toEqual("1, 2, Fizz, 4, Buzz");
  });
  it("deberia generar una secuencia hasta Fizz para un numero multiplo de 3 [6]", () => {
    expect(generarSecuencia(6)).toEqual("1, 2, Fizz, 4, Buzz, Fizz");
  });
  it("deberia generar una secuencia hasta Buzz para un numero multiplo de 5 [10]", () => {
    expect(generarSecuencia(10)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz");
  });
  it("deberia generar una secuencia hasta FizzBuzz para un numero multiplo de 3 y 5 [15]", () => {
    expect(generarSecuencia(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
  });
  it("deberia generar FizzBuzz para un numero multiplo de 3 y 5 [30]", () => {
    expect(generarSecuencia(30)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz");
  });
});

