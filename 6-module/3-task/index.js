import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  
  elem = null;
  
  constructor(slides) {
    this.slides = slides;
    this.createCarousel();
    this.elem;
    this.initCarousel();
    this.productAddCarousel();
  }

  createCarousel() {
  let carousel = createElement(`
    <div class="carousel">
      
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
        ${this.slides.map(obj => (
          `
        <div class="carousel__slide" data-id="${obj.id}">
          <img src="/assets/images/carousel/${obj.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${obj.price.toFixed(2)}</span>
              <div class="carousel__title">${obj.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
        </div> 
          `
        )).join('')}
      </div>
    </div>
  `)

  this.elem = carousel;
  }

  initCarousel() {
    let buttons = this.elem.querySelectorAll('.carousel__arrow');

    let carousel = this.elem.querySelector('.carousel__inner');

    let step = 0;

    buttons[1].style.display = 'none';

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.carousel__arrow_right') ? step++ : step--;

        carousel.style.transform = `translateX(-${step * carousel.offsetWidth}px)`;

        if(step === 0) {
          buttons[1].style.display = 'none';
        } else {
          buttons[1].style.display = '';
        }
    
        if(step === this.slides.length - 1) {
          buttons[0].style.display = 'none';
        } else {
          buttons[0].style.display = '';
        }
      })
    });
  }

  productAddCarousel() {
    let buttons = this.elem.querySelectorAll(".carousel__button");

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: button.closest('.carousel__slide').dataset.id,
          bubbles: true,
        }));
      })
    })
  }
}