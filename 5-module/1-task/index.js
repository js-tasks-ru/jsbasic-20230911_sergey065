function hideSelf() {
  let elem = document.querySelector('button');

  elem.addEventListener('click', () => elem.hidden = true);
}
