export function initAccordion() {
    const content = document.querySelectorAll('.ac-content');
    const accordionTitle = document.querySelectorAll('.ac-summary');
    content.forEach((el, index) => {
      const height = el.scrollHeight;
      el.style.setProperty('--max-height', height + 'px');
    });
  
    for (let i = 0; i < accordionTitle.length; i++) {
      accordionTitle[i].addEventListener('click', function () {
        for (let j = 0; j < accordionTitle.length; j++) {
          if (accordionTitle[i] !== accordionTitle[j]) {
            accordionTitle[j].classList.remove('is-open');
            accordionTitle[j].nextElementSibling.classList.remove('is-open');
          }
        }
        this.classList.toggle('is-open');
        this.nextElementSibling.classList.toggle('is-open');
      });
    }

    const sideBody = document.querySelectorAll('.side-content')
    const sideTitle = document.querySelectorAll('.side-summary')
    sideBody.forEach((el, index) => {
        const height = el.scrollHeight
        el.style.setProperty('--max-height', height + 'px')
    })

    for (let i = 0; i < sideTitle.length; i++) {
        sideTitle[i].addEventListener('click', function () {
            this.classList.toggle('is-open')
            this.nextElementSibling.classList.toggle('is-open')
        })
    }
  }
  