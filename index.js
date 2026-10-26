
// HEADER---------
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
// HEADER---------

// NAVBAR---------

// NAVBAR---------