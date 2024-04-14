function toggleText() {
  let elem = document.querySelector('.toggle-text-button');

  let div = document.querySelector('#text');

  elem.addEventListener('click', () => div.hidden = !div.hidden);
}
