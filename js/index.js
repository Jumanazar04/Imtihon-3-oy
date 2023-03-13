const btn = document.querySelector('.menu__btn');
const menuCard = document.querySelector('.menu__card');


btn.addEventListener('click', function (){
    menuCard.classList.toggle('active')
})