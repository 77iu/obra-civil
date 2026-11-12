const contenedorMultiples = document.getElementById('contenedor_multiples'); 
      for (let i = 1; i <= 5; i++) {
        const fila = document.createElement('div');
        fila.className = 'fila-calculo';
        fila.innerHTML = `
          <div class="input-box">
            <input type="number" class="input-distancia" placeholder="Distancia ${i}" data-index="${i}">
          </div>
          <output class="dato" id="output_nivel_${i}">Nivel ${i}</output>
        `;
        contenedorMultiples.appendChild(fila);
      }
      function calcularTodosLosNiveles() {
        const d_ini = parseFloat(document.getElementById('distancia_inicial').value);
        const d_fin = parseFloat(document.getElementById('distancia_final').value);
        const n_ini = parseFloat(document.getElementById('nivel_inicial').value);
        const n_fin = parseFloat(document.getElementById('nivel_final').value);
        const inputsDistancia = document.querySelectorAll('.input-distancia');
        inputsDistancia.forEach((input, index) => {
          const i = index + 1;
          const outputEl = document.getElementById(`output_nivel_${i}`);
          const nueva_dist = parseFloat(input.value);
          if (isNaN(d_ini) || isNaN(d_fin) || isNaN(n_ini) || isNaN(n_fin)) {
            if (input.value !== "") {
              outputEl.textContent = "Faltan datos base";
              outputEl.className = "dato error";
            } else {
              outputEl.textContent = `Nivel ${i}`;
              outputEl.className = "dato";
            }
            return;
          }
          if (isNaN(nueva_dist)) {
            outputEl.textContent = `Nivel ${i}`;
            outputEl.className = "dato";
            return;
          }
          let nuevo_nivel = n_ini + ((n_fin - n_ini) / (d_fin - d_ini)) * (nueva_dist - d_ini);
          nuevo_nivel = nuevo_nivel.toFixed(3);
          outputEl.textContent = nuevo_nivel;
          outputEl.className = "dato resultado";
        });
      }
      document.getElementById('formulario').addEventListener('input', calcularTodosLosNiveles);