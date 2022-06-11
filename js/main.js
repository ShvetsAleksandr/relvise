const icons = document.querySelectorAll('.icon');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

icons.forEach (icon => {  
   icon.addEventListener('click', (event) => {
   icon.classList.toggle("open");
   headerMenu.classList.toggle('active');
   body.classList.toggle('hold');
   });
});