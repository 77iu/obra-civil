
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {

      const tiempoMinimo = 800; 
      
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.remove();
        }, 500); 
        
      }, tiempoMinimo);
    }
  });