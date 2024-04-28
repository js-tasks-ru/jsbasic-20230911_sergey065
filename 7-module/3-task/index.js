import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  elem = null;

  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.stepsSpan();
    this.elem = createElement(this.slider());
    this.clickStep();
  }

  stepsSpan() {
    let span = '';

    for(let i = 0; i < this.steps; i++) {
      span += '<span></span>';
    }

    return span;
  }

  slider() {
    return `
      <div class="slider">

        <!--Ползунок слайдера с активным значением-->
        <div class="slider__thumb" style="left: 0%;">
          <span class="slider__value">${this.value}</span>
        </div>

        <!--Заполненная часть слайдера-->
        <div class="slider__progress" style="width: 0%;"></div>

        <!--Шаги слайдера-->
        <div class="slider__steps">
          ${this.stepsSpan()}
        </div>
      </div>
    `
  }

  clickStep() {
    this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active");

    this.elem.addEventListener('click', (event) => {
      let sliderCoords = this.elem.getBoundingClientRect();
      let sliderLeft = sliderCoords.left;
      let sliderWidth = sliderCoords.width;
      let stepLengthPercent = 100/(this.steps - 1);

      let eventX = event.clientX;
      let eventXPercent = (eventX - sliderLeft) / sliderWidth * 100;
      this.value = Math.round(eventXPercent / stepLengthPercent);

      this.elem.querySelector(".slider__value").textContent = this.value;
      this.elem.querySelector(".slider__step-active").classList.remove("slider__step-active");
      this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active");
      this.elem.querySelector('.slider__thumb').style.left = this.value * stepLengthPercent + "%";
      this.elem.querySelector('.slider__progress').style.width = this.value * stepLengthPercent + "%";

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }))
    })

  }
}