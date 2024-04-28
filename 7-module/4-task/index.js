import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  elem = null;
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this._spanNumber();
    this.stepLengthPercent = 100/(this.steps - 1);
    this._render();
    
  }
  
  _spanNumber = () => {
    let span = '';
    
    for (let i = 0; i < this.steps; i++) {
        span += `<span></span>`;
      }

    return span;
  }

  _render() {

     this.elem = createElement(this._template());
     this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active");
     this.elem.querySelector('.slider__progress').style.width = 0 + '%';
     
     this.elem.addEventListener('click', (event) => {
      let sliderCoords = this.elem.getBoundingClientRect();
      let sliderLeft = sliderCoords.left;
      let sliderWidth = sliderCoords.width;
      

      let eventX = event.clientX;
      let eventXPercent = (eventX - sliderLeft) / sliderWidth * 100;
      this.value = Math.round(eventXPercent / this.stepLengthPercent);

      this.elem.querySelector(".slider__value").textContent = this.value;
      this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active");
      this.elem.querySelector('.slider__thumb').style.left = this.value * this.stepLengthPercent + "%";
      this.elem.querySelector('.slider__progress').style.width = this.value * this.stepLengthPercent + "%";

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }))
    }) 

     let thumb = this.elem.querySelector(".slider__thumb");
     thumb.ondragstart = (event) => {
      event.preventDefault;
    }

    

     this.elem.onpointerdown = () => {
      document.addEventListener('pointermove', this._onPointerMove);
      document.addEventListener('pointerup', this._onPointerUp, {
        once: true
      });
      this.elem.classList.add('slider_dragging');
    }
  }

  _onPointerMove = (event) => {
    let sliderCoords = this.elem.getBoundingClientRect();
      let sliderLeft = sliderCoords.left;
      let sliderWidth = sliderCoords.width;
      

      let eventX = event.clientX;
      let eventXPercent = (eventX - sliderLeft) / sliderWidth * 100;
      if (eventXPercent > 100) {eventXPercent = 100;}
      else if (eventXPercent < 0) {eventXPercent = 0;}
      this.value = Math.round(eventXPercent / this.stepLengthPercent);

      this.elem.querySelector('.slider__thumb').style.left = eventXPercent + "%";     //
      this.elem.querySelector('.slider__progress').style.width = eventXPercent + "%"; //
      this.elem.querySelector(".slider__value").textContent = this.value;
      this.elem.querySelector(".slider__step-active").classList.remove("slider__step-active");
      this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active");
      
  }

  _onPointerUp = () => {
    this.elem.querySelector('.slider__thumb').style.left = this.value * this.stepLengthPercent + "%";     //
    this.elem.querySelector('.slider__progress').style.width = this.value * this.stepLengthPercent + "%"; //
    document.removeEventListener('pointermove', this._onPointerMove);
    this.elem.classList.remove('slider_dragging');
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
    }))
  }

  _template() {
    return `
    <div class="slider">
       <div class="slider__thumb">
          <span class="slider__value">${this.value}</span>
        </div>

      <div class="slider__progress"></div>
      <div class="slider__steps">
         ${this._spanNumber()}
      </div>`
  }
  }