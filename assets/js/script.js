'use strict';

/**
 * . 1) Variables del menú de navegación
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

/* Hasta aca */
/* 2) Manejo de eventos del menú de navegación*/

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}

/* Hasta Aca */

/**
 * header sticky 
 * hace que el header se vuelva "sticky"
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * Botón "Subir"
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});
/**Scrip de Registro */

document.addEventListener('DOMContentLoaded', () => {
  const formOpenBtn = document.getElementById('form-open');
  const formContainer = document.getElementById('form-container');
  const formCloseBtn = document.getElementById('form-close');
  const loginToggleBtn = document.getElementById('login-toggle');
  const registerToggleBtn = document.getElementById('register-toggle');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  formOpenBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex';
  });

  formCloseBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
  });

  loginToggleBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginToggleBtn.classList.add('active');
    registerToggleBtn.classList.remove('active');
  });

  registerToggleBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    loginToggleBtn.classList.remove('active');
    registerToggleBtn.classList.add('active');
  });

// cierra el contenedor del formulario al hacer clic fuera del formulario
  window.addEventListener('click', (e) => {
    if (e.target === formContainer) {
      formContainer.style.display = 'none';
    }
  });
});