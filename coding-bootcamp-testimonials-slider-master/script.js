'use strict';

const arrowBack = document.querySelector('.arrow-back');
const arrowForward = document.querySelector('.arrow-forward');
const imgSlides = document.querySelectorAll('.img');
const contentSlides = document.querySelectorAll('.content-content');

let currentSlide = 0;
const goToSlide = function (slide) {
  contentSlides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
  imgSlides.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);
const maxSlide = contentSlides.length;
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};
arrowBack.addEventListener('click', prevSlide);
arrowForward.addEventListener('click', nextSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});
