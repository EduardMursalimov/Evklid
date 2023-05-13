// бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav-list');
let menuLinks = menu.querySelectorAll('.header__nav-link');
let swiperHide = document.querySelector('.swiper');
let heroHide = document.querySelector('.hero__content');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav-list--active');
  swiperHide.classList.toggle('menu-open');
  heroHide.classList.toggle('menu-open');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav-list--active');
    swiperHide.classList.remove('menu-open');
    heroHide.classList.remove('menu-open');
    document.body.classList.remove('stop-scroll');
  })
})


// поиск

document.querySelector('.header__nav-button').addEventListener('click', function (event) {
  document.querySelector('.header__search').classList.add('header__search-active');
});

document.querySelector('.search__form-close').addEventListener('click', function (event) {
  document.querySelector('.header__search').classList.remove('header__search-active');
});

// слайдер

const swiper = new Swiper('.swiper', {
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    lastSlideMessage: 'Это последний слайд',
    firstSlideMessage: 'Это первый слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
  direction: 'horizontal',
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// табы

let tabsBtn = document.querySelectorAll('.how__btn');
let tabsItem = document.querySelectorAll('.how__block');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__btn--active') });
    e.currentTarget.classList.add('how__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('how__block--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__block--active');

  });
});

//аккордеон

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
