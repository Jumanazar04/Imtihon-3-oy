const btn = document.querySelector('.menu__btn');
const menuCard = document.querySelector('.menu__card'),
    form1 = document.querySelector('.form1'),
    form1Bnt = document.querySelector('.form1__btn'),
    input = document.querySelector('.input');


btn.addEventListener('click', function (){
    menuCard.classList.toggle('active')
})

