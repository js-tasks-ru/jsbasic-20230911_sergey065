function ucFirst(str) {
  if (str == '') {
    return alert(str);
  } else {
    alert(str[0].toUpperCase() + str.slice(1));}
}

ucFirst(prompt('Введите имя пользователя...', ''));