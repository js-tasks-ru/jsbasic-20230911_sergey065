function factorial(n) {

  if (n < 0 || n % 1 != 0) return alert('Число меньше нуля или дробное!');

  if (n == 0) return alert('Факториал нуля равен единице!');

  let result = 1;

  while(n) {
    result *= n;

    n--
  }

  return alert(result);
}

factorial(+prompt('Введите целое число от 1 и выше...', ''));

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120