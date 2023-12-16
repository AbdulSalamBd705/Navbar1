const manu = document.querySelector('.manu');
const icon = document.querySelector('.fa-solid');
const body = document.querySelector('body');
const slider = document.querySelector('.slider');

console.log(slider);

manu.addEventListener('click', ()=>{
  icon.classList.toggle('fa-xmark')
})
slider.addEventListener('click', ()=>{
  body.classList.toggle("active");
})