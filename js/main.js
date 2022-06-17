"use strict"
const icons = document.querySelectorAll('.icon');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
let spollerTitles = document.querySelectorAll('.spoller__title');
let spollerBlock = document.querySelectorAll('.spoller__block');

icons.forEach(icon => {
   icon.addEventListener('click', (event) => {
      icon.classList.toggle("open");
      headerMenu.classList.toggle('active');
      body.classList.toggle('hold');
   });
});

for (let title of spollerTitles) {
   title.addEventListener('click', function (event) {
      for (let item of spollerBlock) {
         if (item == title.nextElementSibling) {
         } else item.classList.remove('spoller__block-active');
      }
      for (let item of spollerTitles) {
         if (item == this) {
         } else item.classList.remove('spoller__title-active');
      }
      let block = title.nextElementSibling;
      block.classList.toggle("spoller__block-active");
      title.classList.toggle("spoller__title-active");
   });
};

