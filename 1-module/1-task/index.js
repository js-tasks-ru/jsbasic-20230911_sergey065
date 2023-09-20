function factorial(n) {

  if (n === 0 || n === 1) return 1;

  let result = 1;
  
  while(n) {
    result *= n;

    n--
  }

  return result;
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120