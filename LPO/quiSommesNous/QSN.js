const burger = document.querySelector('.burger');
const tabs = document.querySelector('.tabs')

burger.addEventListener('click', () =>{
  burger.classList.toggle('active');
  tabs.classList.toggle('swipe')
})