document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  const $navbarLinks = Array.prototype.slice.call(document.querySelectorAll('.navbar-menu a'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });

  // Add a click event on each navbar link
  $navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Get the "navbar-burger" and the "navbar-menu"
      const $navbarBurger = document.querySelector('.navbar-burger');
      const $navbarMenu = document.querySelector('.navbar-menu');

      // Remove the "is-active" class from both the "navbar-burger" and the "navbar-menu"
      $navbarBurger.classList.remove('is-active');
      $navbarMenu.classList.remove('is-active');
    });
  });
});
