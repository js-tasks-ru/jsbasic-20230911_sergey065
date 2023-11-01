function initCarousel() {

  let next = document.querySelector('.carousel__arrow_right');

  let prev = document.querySelector('.carousel__arrow_left');

  let carousel = document.querySelector('.carousel__inner');

  let offsetWidth = carousel.offsetWidth;

  let step = 0;

  prev.style.display = 'none';

  next.addEventListener('click', () => {
    
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
})
}