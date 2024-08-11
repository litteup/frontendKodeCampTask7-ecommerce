// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Check if navbar is active,if not click the menu bar to see the menu items

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

// close the hamburger menu using the x icon
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
