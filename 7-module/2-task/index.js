import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(this.Modal());
  }

  open() {
    document.body.classList.add('is-modal-open');

    document.body.append(this.elem);

    document.querySelector(".modal__close").onclick = () => this.close();

    document.addEventListener('keydown', this.keydown);
  }

  Modal() {
    return  `
    <div class="modal">
      
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title"></h3>

        </div>

        <div class="modal__body"></div>

      </div>

    </div>
    `
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').textContent = title;
  }

  setBody(body) {
    this.elem.querySelector('.modal__body').innerHTML = '';

    this.elem.querySelector('.modal__body').append(body);
  }

  keydown = (event) => {
      if (event.code === 'Escape') this.close(); 
  }

  close() {
    let modal = document.querySelector('.modal');

    if (modal) modal.remove();

    document.body.classList.remove('is-modal-open');

    document.removeEventListener('keydown', this.keydown);
  }
}