const close = document.getElementById('close');
const normal = document.querySelector('.container');
const modal = document.querySelector('.modalcontainer');
const open = document.querySelector('#open');
close.onclick = () =>{
    normal.classList.toggle('invisible');
    modal.classList.toggle('invisible');
}
open.addEventListener('click',()=>{
    normal.classList.toggle('invisible');
    modal.classList.toggle('invisible');
})