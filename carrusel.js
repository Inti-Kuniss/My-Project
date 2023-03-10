const carouselContainer = document.querySelector('.carousel-container');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

let position = 0;

function moveCarousel() {
  carouselContainer.style.transform = `translateX(-${position}px)`;
}

previousButton.addEventListener('click', () => {
  if (position > 0) {
    position -= 140;
    moveCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (position < (carouselContainer.scrollWidth - carouselContainer.clientWidth)) {
    position += 140;
    moveCarousel();
  }
});