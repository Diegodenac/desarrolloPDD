function generarFizzBuzz(n) {
  let message = "";
  let i=1;
  while (i<=n){
    if(i%3 === 0 && i%5 === 0)
      message = message + "FizzBuzz";
    else{
      if(i%3 === 0)
        message = message + "Fizz";
      else{
        if(i%5 === 0)
          message = message + "Buzz";
        else
          message = message + i.toString();
      }
    }
    if(i<n)
      message = message + ", ";
    i++;
  }
  return message;
}

export default generarFizzBuzz;
