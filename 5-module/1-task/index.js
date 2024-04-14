function hideSelf() {
  let elem = document.querySelector('.hide-self-button');

  //elem.addEventListener('click', () => elem.hidden = true);

  elem.onclick = () => elem.hidden = true;
}
