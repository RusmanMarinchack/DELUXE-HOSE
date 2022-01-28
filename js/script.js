'use strict'

$(document).ready(function () {
    $('.year-warrnty__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        lazyLoad: 'ondemand',
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
      });


      let location = window.location.pathname;

      if(location === '/cp-lcd-arman.html' || location === '/ls-lcd-arman.html' || location === '/dist/cp-lcd-arman.html' || location === '/dist/ls-lcd-arman.html'){
          lightGallery(document.querySelector('._gallery'));
      }
      else {
              lightGallery(document.querySelector('._gallery'));
      }

})


const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBorry: function() {
        return navigator.userAgent.match(/BlackBorry/i);
    },
    IOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBorry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

document.querySelector('._submenu-arrow').addEventListener('click', function() {
    document.querySelector('.submenu').classList.toggle('_submenu-active');
});



let project = document.querySelectorAll('.project-wrapper__item img');

project.forEach((element) => {
    element.addEventListener('click', () => {
        let link = element.dataset.link;
        document.location.href = `${link}`
    })
})

let tabBtn = document.querySelectorAll('.tab__btn');
let tabBody = document.querySelectorAll('.tab__body');

tabBtn.forEach((element, index) => {
    element.addEventListener('click', function(e) {
        removeClass();
        e.target.classList.add('tab__btn-active');

        tabBody.forEach((el, i) => {
            if(i == element.dataset.item){
                el.classList.add('tab__body-active');
            } else {
                el.classList.remove('tab__body-active');
            }
    })
    })
})

function removeClass() {
    tabBtn.forEach((element) => {
        element.classList.remove('tab__btn-active')
    })
}

document.querySelector('.nav__burger').addEventListener('click', function() {
    this.classList.toggle('nav__burger-active')
})


let imgSlider = document.querySelectorAll('.year-warrnty__img');

imgSlider.forEach((element, index) => {
    element.addEventListener('click', function() {
        document.querySelector('.popup').classList.add('popup-active');
        document.querySelector('.popup__container').innerHTML = `<img src="${this.getAttribute('src')}" alt="" class="popup__popup-img">`;
        console.log(index);
    })

    document.querySelector('.popup__span').addEventListener('click', () => {
        document.querySelector('.popup').classList.remove('popup-active');
    })
})


let acardionBtn = document.querySelectorAll('.acardion-item__btn');

acardionBtn.forEach(element => {
    element.addEventListener('click', function() {
        this.classList.toggle('acardion-item__btn-active')
        let acardionBody = this.nextElementSibling;
        if(acardionBody.style.height){
            acardionBody.style.height = null;
            console.log(acardionBody.scrollHeight);
        } else {
            acardionBody.style.height = acardionBody.scrollHeight + 'px';

            acardionBody.addEventListener('click', () => {
                acardionBody.style.height = null;
                this.classList.remove('acardion-item__btn-active')
            })
        }
    })
})


    
let btnFotm = document.querySelector('.form__btn');
let inputNumber = document.querySelector('.form__input');
let formBlock = document.querySelector('.block-form__content');


let maskOptions = {
    mask: '+{38}(000)000-00-00',
  };
  let mask = IMask(inputNumber, maskOptions);

btnFotm.addEventListener('click', (e) => {
    e.preventDefault();
    inputLength();
})

function inputLength() {
    let inputNumberValue = inputNumber.value;
    console.log(inputNumberValue.length);
    if(inputNumberValue.length < 17){
        inputNumber.classList.add('form__input-error')
    } 
    else  {
        inputNumber.classList.remove('form__input-error');
        inputValueNull();
        formContent();
    }
}

function inputValueNull() {
    inputNumber.value = '';
}

let formWrapper = document.querySelector('.block-form__block');
    let formWrapperHeigth = document.querySelector('.block-form__block').clientHeight;

function formContent() {

    formBlock.innerHTML = `<div class="application">
                                <button class="application__btn">&times;</button>
                                <p class="application__text"><b>Спасибо что оставили заявку!</b></p>
                                <p class="application__text">А пока вы ждете звонок, можете просмотреть наши лучшие проекты!</p>
                                <span class="application__span">Мы создаем прекрасное!</span>
                            </div>`;
    let application = document.querySelector('.application');
    application.style.height = `${formWrapperHeigth}px`;

    console.log(formWrapperHeigth);

    document.querySelector('.application__btn').addEventListener('click', () => {
        formBlock.append(formWrapper);
        application.style.display = 'none';
    })
}


let windowLocation = window.location.pathname;
let headerLink = document.querySelectorAll('.nav a');
// console.log(headerLink[1].getAttribute('href'));

headerLink.forEach(element => {
    if(element.getAttribute('href').substring(2) === windowLocation.substring(1) || `/dist/${element.getAttribute('href').substring(2)}` == windowLocation){
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
})

