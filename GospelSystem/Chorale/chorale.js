const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5*4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }

    });
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu')

burger.addEventListener('click', () =>{
  burger.classList.toggle('active');
  menu.classList.toggle('swipe')
})