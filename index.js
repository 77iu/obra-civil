const toggleButton = document.getElementById("toggleButton");

const bgMenu = document.getElementById("bgMenu");

toggleButton.addEventListener("click", function () {
  bgMenu.classList.toggle("headerOn");

  toggleButton.classList.toggle("icon");
});

function remove() {
  bgMenu.classList.remove("headerOn");

  toggleButton.classList.toggle("icon");
}

// Calculador de niveles por distancia========================

function calcularNuevoNivel() {
  var distancia_inicial = parseFloat(document.getElementById('distancia_inicial').value);
  var distancia_final = parseFloat(document.getElementById('distancia_final').value);
  var nivel_inicial = parseFloat(document.getElementById('nivel_inicial').value);
  var nivel_final = parseFloat(document.getElementById('nivel_final').value);
  var nueva_distancia = parseFloat(document.getElementById('nueva_distancia').value);
  var nuevo_nivel_output = document.getElementById('nuevo_nivel');
 
  // Verificar si falta algún valor
  if (isNaN(distancia_inicial) || isNaN(distancia_final) || isNaN(nivel_inicial) || isNaN(nivel_final) || isNaN(nueva_distancia)) {
    nuevo_nivel_output.textContent = "Falta uno o más valores";
    nuevo_nivel_output.classList.add('error');
    nuevo_nivel_output.classList.remove('resultado');
    return;
  }
 
  // Calcular el nuevo nivel
  var nuevo_nivel = nivel_inicial + ((nivel_final - nivel_inicial) / distancia_final) * nueva_distancia;
  nuevo_nivel = nuevo_nivel.toFixed(3); // Limitar a 3 decimales
 
  // Mostrar el resultado en azul
  nuevo_nivel_output.textContent = nuevo_nivel;
  nuevo_nivel_output.classList.add('resultado');
  nuevo_nivel_output.classList.remove('error');
 }
 const box = document.querySelector('.box');
 const leftButton = document.getElementById('left-button');
 const rightButton = document.getElementById('right-button');
 
 let rotationAngle = 0;
 
 leftButton.addEventListener('click', () => {
    rotationAngle -= 60;
    box.style.transform = `translateZ(-400px) rotateY(${rotationAngle}deg)`;
 });
 
 rightButton.addEventListener('click', () => {
    rotationAngle += 60;
    box.style.transform = `translateZ(-400px) rotateY(${rotationAngle}deg)`;
 });
 

 let startX = 0;
let endX = 0;

// Touch events
box.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

box.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

box.addEventListener('touchend', () => {
  if (startX > endX + 50) {
    // Swipe left
    rotationAngle -= 60;
  } else if (startX < endX - 50) {
    // Swipe right
    rotationAngle += 60;
  }
  box.style.transform = `translateZ(-400px) rotateY(${rotationAngle}deg)`;
});
