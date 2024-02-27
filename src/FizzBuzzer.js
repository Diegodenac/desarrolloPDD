function generarFizzBuzz(n) {
  let message = "";
  let i=1;
  while (i<=n){
    message = message + i.toString();
    if(i<n)
      message = message + ", ";
    i++;
  }
  if(n%3 === 0 && n%5 === 0)
    return "FizzBuzz";
  if(n%3 === 0)
    return "Fizz";
  if(n%5 === 0)
    return "Buzz";
  return message;
}

export default generarFizzBuzz;
