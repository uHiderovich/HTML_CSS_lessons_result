document.addEventListener("DOMContentLoaded", () => {
 const menuActivator = document.querySelector('.js-menu-activator');
 const menu = document.querySelector('.js-nav-menu')
 menuActivator.addEventListener("click", () => {
  menu.classList.toggle("nav-menu_active");
 });
});