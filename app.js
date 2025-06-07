const menuBtn = document.querySelector('.menu-btn');
const listItems =document.querySelector('.list-items'); 
menuBtn.addEventListener ('click',()=> {
 listItems.classList.toggle('mobile-menu')
});