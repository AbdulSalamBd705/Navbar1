const manu = document.querySelector('.manu');
const icon = document.querySelector('.fa-solid');
const body = document.querySelector('body');
const slider = document.querySelector('.slider');
const main_list = document.querySelector('.main_list');

console.log(slider);

manu.addEventListener('click', ()=>{
  icon.classList.toggle('fa-xmark');
  main_list.classList.toggle("show_list");
})
slider.addEventListener('click', ()=>{
  body.classList.toggle("active");
})