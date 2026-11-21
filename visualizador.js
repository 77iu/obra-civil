 const box = document.querySelector('.box');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

let rotationAngle = 0;
const rotationStep = 360 / 6; 

leftButton.addEventListener('click', () => {
  rotationAngle -= rotationStep;
  box.style.transform = `translateZ(-400px) rotateY(${rotationAngle}deg)`;
});

rightButton.addEventListener('click', () => {
  rotationAngle += rotationStep;
  box.style.transform = `translateZ(-400px) rotateY(${rotationAngle}deg)`;
});

let startX = 0;
let endX = 0;

box.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

box.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

box.addEventListener('touchend', () => {
  if (startX > endX + 50) {
    rotationAngle -= rotationStep;
  } else if (startX < endX - 50) {
    rotationAngle += rotationStep;
  }
  box.style.transform = `translateZ(-400px) rotateY(${rotationAngle}deg)`;
});