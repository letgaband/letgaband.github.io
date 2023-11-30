let cbc = document.querySelector(".cabecalho");
let btn_container = document.querySelector(".header-logo-btn");
let btn = document.getElementById("sidebar-btn");

function sidebarToggle() {
  cbc.classList.toggle("active-cabecalho");
    btn_container.classList.toggle("active-btn-container");
  btn.classList.toggle("active-btn");
}

btn.addEventListener("click", sidebarToggle);