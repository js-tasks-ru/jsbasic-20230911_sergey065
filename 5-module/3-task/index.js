function initCarousel() {

  let next = document.querySelector('.carousel__arrow_right');

  let prev = document.querySelector('.carousel__arrow_left');

  let carousel = document.querySelector('.carousel__inner');

  let offsetWidth = carousel.offsetWidth;

  let step = 0;

  prev.style.display = 'none';

  let cont = document.querySelector('.container');

  //есть мертвые зоны на кнопке
  cont.onclick = (e) => {
    let button = e.target;

    if (button.target === !next || button.target === !prev) return;

    if (button === next) {
      step++

      carousel.style.transform = `translateX(${-step * offsetWidth}px)`;

      if (step >= 3) {
        next.style.display = 'none';
      }
  
      if (step > 0) {
        prev.style.display = '';
      }
    } else if (button === prev) {
      step--;

      carousel.style.transform = `translateX(${-step * offsetWidth}px)`;

      if (step == 0) {
        prev.style.display = 'none';
      }

      if(step <= 3) {
        next.style.display = '';
      }
    }
  }

  /* next.addEventListener('click', () => {
    
    step++

    carousel.style.transform = `translateX(${-step * offsetWidth}px)`;
  
    if (step >= 3) {
      next.style.display = 'none';
    }

    if (step > 0) {
      prev.style.display = '';
    }
  })

  prev.addEventListener('click', () => {

  step--;

  carousel.style.transform = `translateX(${-step * offsetWidth}px)`;

  if (step == 0) {
    prev.style.display = 'none';
  }

  if(step <= 3) {
    next.style.display = '';
  }
}) */
}