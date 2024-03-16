'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider__block');         // все слайды
    const prev = document.getElementById('prev');                       // стрелка назад
    const next = document.getElementById('next');                       // стрелка вперед
    const slidesWrapper = document.querySelector('.slider__wrapper');   // обертка всех слайдов
    const slidesField = document.querySelector('.slider__inner');       // гор-е поле для всех слайдов
    const width = window.getComputedStyle(slidesWrapper).width;         // ширина обёртки
    const current = document.querySelector('#current');                 // текущий отчет

    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all ease';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    current.textContent = 3;
    next.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) *(slides.length - 1))) {
            offset = 0;
            current.textContent = 3;
        } else {
            offset += +width.slice(0, width.length - 2);
            current.textContent = 6;
        }

        slidesField.style.transform = `translateX(-${ offset }px)`;
    });  

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            current.textContent = 6;
        } else {
            offset -= +width.slice(0, width.length - 2);
            current.textContent = 3;
        }

        slidesField.style.transform = `translateX(-${ offset }px)`;
    });

    //этот же слайдер только на мобильном устройстве (блок slider)
    const slidesAll = document.querySelectorAll('.slider__blockMobile');// все слайды
    const prevMobile = document.getElementById('prevMobile');           // стрелка назад
    const nextMobile = document.getElementById('nextMobile');           // стрелка вперед
    const slidesWrapperMobile = document.querySelector('.slider__wrapperMobile');   // обертка всех слайдов
    const slidesFieldMobile = document.querySelector('.slider__innerMobile');       // гор-е поле для всех слайдов
    const widthMobileSlider = window.getComputedStyle(slidesWrapperMobile).width;         // ширина обёртки
    const currentMobile = document.querySelector('#currentMobile');                 // текущий отчет
    const totalMobile = document.querySelector('#totalMobile');

    let offsetMobileSlider = 0;
    let slideIndexSlider = 1;

    slidesFieldMobile.style.width = 100 * slidesAll.length + '%';
    slidesFieldMobile.style.display = 'flex';
    slidesFieldMobile.style.transition = '0.5s all ease';

    slidesWrapperMobile.style.overflow = 'hidden';

    slidesAll.forEach(slide => {
        slide.style.width = widthMobileSlider;
    });

    totalMobile.textContent = slidesAll.length;
    currentMobile.textContent = slideIndexSlider; 

    nextMobile.addEventListener('click', () => {
        if (offsetMobileSlider == +widthMobileSlider.slice(0, widthMobileSlider.length - 2) * (slidesAll.length - 1)) {
            offsetMobileSlider = 0;
            // +widthWrapper.slice(0, widthWrapper.length - 2) => '500px' -> 500
        } else {
            offsetMobileSlider += +widthMobileSlider.slice(0, widthMobileSlider.length - 2)
        }
        
        slidesFieldMobile.style.transform = `translateX(-${offsetMobileSlider}px)`;

        if (slideIndexSlider == slidesAll.length) {
            slideIndexSlider = 1
        } else {
            slideIndexSlider++;
        }

        currentMobile.textContent = slideIndexSlider;
    });

    prevMobile.addEventListener('click', () => {
        if (offsetMobileSlider == 0) {
            offsetMobileSlider = +widthMobileSlider.slice(0, widthMobileSlider.length - 2) * (slidesAll.length - 1)
            // +widthWrapper.slice(0, widthWrapper.length - 2) => '500px' -> 500
        } else {
            offsetMobileSlider -= +widthMobileSlider.slice(0, widthMobileSlider.length - 2)
        }

        slidesFieldMobile.style.transform = `translateX(-${offsetMobileSlider}px)`;

        if (slideIndexSlider == 1) {
            slideIndexSlider = slidesAll.length
        } else {
            slideIndexSlider--;
        }

        currentMobile.textContent = slideIndexSlider;
    });

    // слайдер на мобильном устройстве (блок advantages)
    const slidesMobile = document.querySelectorAll('.advantages__slide');   // все слайды
    const left = document.querySelector('.advantages__arrows-left');        // стрелка назад
    const right = document.querySelector('.advantages__arrows-right');      // стрелка вперед
    const wrapper = document.querySelector('.advantages__wrapperMobile');   // обертка всех слайдов
    const inner = document.querySelector('.advantages__inner');             // гор-е поле для всех слайдов
    const widthMobile = window.getComputedStyle(wrapper).width;             // ширина обёртки

    let offsetMobile = 0;
    let slideIndex = 1;

    inner.style.width = 100 * slidesMobile.length + '%';
    inner.style.display = 'flex';
    inner.style.transition = '0.5s all ease';

    wrapper.style.overflow = 'hidden';

    slidesMobile.forEach(slide => {
        slide.style.width = widthMobile;
    });

    // создание индикаторов между кнопками
    const dots = [];
    const indicators = document.querySelector('.advantages__indicators');

    for (let i = 0; i < slidesMobile.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('advantages__dot');
        dot.setAttribute('data-slide-to', i + 1);

        if (i == 0) {
            dot.style.opacity = 1;
        } else {
            dot.style.opacity = 0.5;
        }

        indicators.append(dot);
        dots.push(dot);
    }

    const dotsActive = () => {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    };

    right.addEventListener('click', () => {
        if (offsetMobile == (+widthMobile.slice(0, widthMobile.length - 2) *(slidesMobile.length - 1))) {
            offsetMobile = 0;
        } else {
            offsetMobile += +widthMobile.slice(0, widthMobile.length - 2);
        }
        
        inner.style.transform = `translateX(-${offsetMobile}px)`;

        if (slideIndex == slidesMobile.length) {
            slideIndex = 1
        } else {
            slideIndex++;
        }

        dotsActive();
    });

    left.addEventListener('click', () => {
        if (offsetMobile == 0) {
            offsetMobile = +widthMobile.slice(0, widthMobile.length - 2) * (slidesMobile.length - 1);
        } else {
            offsetMobile -= +widthMobile.slice(0, widthMobile.length - 2);
        }

        inner.style.transform = `translateX(-${ offsetMobile }px)`;

        if (slideIndex == 1) {
            slideIndex = slidesMobile.length;
        } else {
            slideIndex--;
        }

        dotsActive();
    });

});


