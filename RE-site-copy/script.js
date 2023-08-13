const zoomableImages = document.querySelectorAll('.zoomable');
const fullscreenContainer = document.querySelector('.fullscreen-container');
const fullscreenImage = document.querySelector('.fullscreen');

zoomableImages.forEach(image => {
  image.addEventListener('click', () => {
    fullscreenImage.src = image.src;
    fullscreenContainer.style.display = 'flex';
  });
});

fullscreenContainer.addEventListener('click', () => {
  fullscreenContainer.style.display = 'none';
});
