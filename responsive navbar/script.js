const menu = document.getElementById('menu-icon');
const first = document.querySelector('#first');
const nav = document.querySelector('nav');
let clicked = false;
menu.onclick = () =>{
   if (clicked == false){
      clicked = true;
      first.setAttribute('class','first')
   }
   else{
      clicked = false;
      first.setAttribute('class', 'first2')
   }
   
}


