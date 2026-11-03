document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const headerDeck = document.querySelector(".header__deck");
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

  // Función para cerrar el menú y limpiar estados
  function closeMenu() {
    toggleButton.classList.remove("icon");
    headerDeck.classList.remove("is-open");
    toggleButton.setAttribute("aria-expanded", "false");

    dropdownTriggers.forEach((btn) =>
      btn.setAttribute("aria-expanded", "false")
    );
  }

  // Alternar apertura de menú móvil
  toggleButton.addEventListener("click", () => {
    const isOpen = toggleButton.classList.toggle("icon");
    headerDeck.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  // Cerrar el menú al tocar cualquier enlace de las opciones
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Accesibilidad: Cerrar con la tecla Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && headerDeck.classList.contains("is-open")) {
      closeMenu();
    }
  });
});