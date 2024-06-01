import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {

  elem = null;

  constructor(categories) {
    this.categories = categories;
    this.elem;
    this.createRibbonMenu();
    this.ribbonCarousel();
    this.eventRibbon();
  }

  createRibbonMenu() {
    this.elem = createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner">
        ${this.categories.map(obj => (
          `
          <a href="#" class="ribbon__item" data-id="${obj.id}">${obj.name}</a>
          `
        )).join('\n')}
      </nav>

      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `)
  }

  ribbonCarousel() {
    let buttons = this.elem.querySelectorAll('.ribbon__arrow');

    let menuLink = this.elem.querySelector('.ribbon__inner');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.ribbon__arrow_right') ? menuLink.scrollBy(350, 0) : menuLink.scrollBy(-350, 0);
      })
    });

    menuLink.addEventListener('scroll', () => {
      if(menuLink.scrollLeft > 0) {
        buttons[0].classList.add("ribbon__arrow_visible");
      } else {
        buttons[0].classList.remove("ribbon__arrow_visible");
      }

      let scrollWidth = menuLink.scrollWidth;
      let scrollLeft = menuLink.scrollLeft;
      let clientWidth = menuLink.clientWidth;

      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if(scrollRight < 1) {
        buttons[1].classList.remove("ribbon__arrow_visible");
      } else {
        buttons[1].classList.add("ribbon__arrow_visible");
      }
    })
  }

  eventRibbon() {
    let link = Array.from(this.elem.querySelectorAll('.ribbon__item'));

    let buttons = this.elem.querySelectorAll('.ribbon__arrow');

    for(let lnk of link) {
      lnk.addEventListener('click', (event) => {
        event.preventDefault();

        this.elem.dispatchEvent(new CustomEvent("ribbon-select", {
          detail: lnk.dataset.id,
          bubbles: true,
        }));

        for (let elem of link) {
          elem.classList.remove('ribbon__item_active');
        }

        if (event.target != buttons[1] && event.target != buttons[0]) {
          event.target.classList.add('ribbon__item_active');
        }  
      })
    }
  }

}