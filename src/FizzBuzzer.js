function generarFizzBuzz(n) {
  if(n%3 === 0 && n%5 === 0)
    return "FizzBuzz";
  if(n%3 === 0)
    return "Fizz";
  if(n%5 === 0)
    return "Buzz";
  return n.toString();
}

function generarSecuencia(n) {
  let i=1;
  let message = "";
  message = message + generarFizzBuzz(1);
  return message;
}

export default generarFizzBuzz;
