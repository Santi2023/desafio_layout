const button = document.querySelector('.button-aside');
const menu = document.querySelector('.container-aside');

button.addEventListener('click',()=>{
    button.classList.toggle("active");
    menu.classList.toggle("click");
})