const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
let index = 0;

// Dynamically set width of slides and each image
function setupSlider() {
  slides.style.width = `${images.length * 100}%`;
  images.forEach(img => img.style.width = `${100 / images.length}%`);
}

window.addEventListener('load', () => {
  setupSlider();
  setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    slides.style.transform = `translateX(-${index * (100 / images.length)}%)`;
  }, 4000);
});
