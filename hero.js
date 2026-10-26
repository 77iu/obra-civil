const botones = document.querySelectorAll('.hero_nav_buttons button');
const imagenes = document.querySelectorAll('.hero_noticia img');
const articulos = document.querySelectorAll('.hero_noticia article');

let currentIndex = 0;
const totalSlides = botones.length;
let autoplayInterval;

// Función para activar una diapositiva específica según su índice
function cambiarDiapositiva(index) {
  currentIndex = parseInt(index);

  // Limpiar clases activas antiguas
  botones.forEach(b => b.classList.remove('active'));
  imagenes.forEach(img => img.classList.remove('active'));
  articulos.forEach(art => art.classList.remove('active'));

  // Asignar clases activas nuevas
  botones[currentIndex].classList.add('active');
  if (imagenes[currentIndex]) imagenes[currentIndex].classList.add('active');
  if (articulos[currentIndex]) articulos[currentIndex].classList.add('active');
}

// Función para avanzar a la siguiente diapositiva automáticamente
function siguienteDiapositiva() {
  let proximoIndex = (currentIndex + 1) % totalSlides;
  cambiarDiapositiva(proximoIndex);
}

// Iniciar el temporizador (Cambia cada 7 segundos)
function iniciarAutoplay() {
  autoplayInterval = setInterval(siguienteDiapositiva, 7000);
}

// Detener y reiniciar el temporizador cuando el usuario interactúa
function reiniciarAutoplay() {
  clearInterval(autoplayInterval);
  iniciarAutoplay();
}

// Evento Click para los botones de navegación manual
botones.forEach(boton => {
  boton.addEventListener('click', (e) => {
    // Usamos .currentTarget para asegurarnos de capturar el botón aunque se haga click sobre el ícono <i>
    const index = e.currentTarget.getAttribute('data-index');
    cambiarDiapositiva(index);
    reiniciarAutoplay(); // Evita que salte de golpe justo después de clickear
  });
});

// Arrancar el autoplay por primera vez al cargar la página
iniciarAutoplay();