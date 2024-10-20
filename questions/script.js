const add1 = document.getElementById('btn1');
const add2 = document.getElementById('btn2');
const add3 = document.getElementById('btn3');



add1.addEventListener('click', function(){
    const elem = this.parentElement
    const p = elem.nextElementSibling
    
    p.classList.toggle('visible');
    add1.classList.toggle('ri-file-reduce-line');
    add2.parentElement.nextElementSibling.classList.add('visible');
    add3.parentElement.nextElementSibling.classList.add('visible');
    console.log(p);
    
    
})
add2.addEventListener('click', function(){
    const elem = this.parentElement
    const p = elem.nextElementSibling
    add2.classList.toggle('ri-file-reduce-line');
    p.classList.toggle('visible');
    add1.parentElement.nextElementSibling.classList.add('visible');
    add3.parentElement.nextElementSibling.classList.add('visible');
    
    
})
add3.addEventListener('click', function(){
    const elem = this.parentElement
    const p = elem.nextElementSibling
    add3.classList.toggle('ri-file-reduce-line');
    p.classList.toggle('visible');
    add1.parentElement.nextElementSibling.classList.add('visible');
    add2.parentElement.nextElementSibling.classList.add('visible');
    
    
})


