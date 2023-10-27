function initCarousel() {

  let next = document.querySelector('.carousel__arrow_right');

  let prev = document.querySelector('.carousel__arrow_left');

  let carousel = document.querySelector('.carousel__inner');

  let offsetWidth = carousel.offsetWidth;

  let step = 0;

  prev.style.display = 'none';

  next.addEventListener('click', () => {

    prev.style.display = '';

    carousel.style.transform = `translateX(-${step += offsetWidth}px)`;

    if (step >= offsetWidth * 3) {
      next.style.display = 'none';
    }
  })

  prev.addEventListener('click', () => {

  carousel.style.transform = `translateX(-${step -= offsetWidth}px)`;

  if (step == 0) {
    prev.style.display = 'none';
  }
})
}