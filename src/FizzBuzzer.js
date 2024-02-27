function generarFizzBuzz(n) {
  let message = "";
  let i=1;
  while (i<=n){
    if(i%3 === 0)
      message = message + "Fizz";
    else
      message = message + i.toString();
    if(i<n)
      message = message + ", ";
    i++;
  }
  if(n%3 === 0 && n%5 === 0)
    return "FizzBuzz";
  if(n%5 === 0)
    return "Buzz";
  return message;
}

export default generarFizzBuzz;
