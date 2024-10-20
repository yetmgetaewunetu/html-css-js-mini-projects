const menu = document.querySelector('#menu');
const side = document.querySelector('.side');
const close = document.getElementById('close');
var clicked = false;

close.addEventListener('click',function(){
    side.classList.toggle('hidden');
})

menu.onclick = () =>{
    menu.classList.toggle('active');
    menu.classList.toggle('menu');
    side.classList.toggle('hidden');
    
}