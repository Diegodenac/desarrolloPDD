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
  while (i<=n){
    message = message + generarFizzBuzz(i);
    if(i<n){
      message = message + ", ";
    }
    i++;
  }
  return message;
}

export { generarFizzBuzz, generarSecuencia };