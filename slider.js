document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('slider-contenedor');
  const btnIzq = document.getElementById('btn-izq');
  const btnDer = document.getElementById('btn-der');

  if (!contenedor || !btnIzq || !btnDer) return;

  const calcularDistancia = () => {
    const primeraCarta = contenedor.querySelector('.card');
    if (!primeraCarta) return 300;

    const gap = parseInt(window.getComputedStyle(contenedor).gap) || 20;
    return primeraCarta.offsetWidth + gap;
  };

  const desplazarSlider = (direccion) => {
    const distancia = calcularDistancia();
    contenedor.scrollBy({
      left: direccion === 'derecha' ? distancia : -distancia,
      behavior: 'smooth'
    });
  };

  btnDer.addEventListener('click', () => desplazarSlider('derecha'));
  btnIzq.addEventListener('click', () => desplazarSlider('izquierda'));

  contenedor.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault(); 
      desplazarSlider('derecha');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      desplazarSlider('izquierda');
    }
  });

  contenedor.setAttribute('tabindex', '0');
});