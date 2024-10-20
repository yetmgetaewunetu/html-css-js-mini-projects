const year = document.getElementById('year').textContent = new Date().getFullYear();
const nav = document.querySelector('nav');
const links = document.querySelectorAll('a');
const menu = document.getElementById('menu');
const upArrow = document.getElementById('upArrow');
const ul = document.querySelector('ul');
window.addEventListener('scroll', displayUp);
window.addEventListener('scroll', fixNav);

menu.onclick=()=>{
    nav.classList.toggle('navHid');
}
function displayUp(){
    if(window.pageYOffset > 500){
        upArrow.style.display = 'inline-block';
    }
    else{
        upArrow.style.display = 'none';
    }
}

function fixNav(){
    const he = nav.getBoundingClientRect().height;
    if(window.pageYOffset > he){
        nav.classList.add('fixedNav');
    }
    else{
        nav.classList.remove('fixedNav')
    }
}
links.forEach(function(e){
    e.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
       
        const element = document.getElementById(id);
        
        const fixed = nav.classList.contains('fixedNav')
        const headerHeight = nav.getBoundingClientRect().height;
        const ulh = ul.getBoundingClientRect().height;
       
        let position = element.offsetTop - headerHeight;
        if(window.innerWidth > 600){
        if(!fixed){
            position = position - headerHeight + ulh;
        
        
        }}
        window.scrollTo({
            left:0,
            top:position,
        })
         if (window.innerWidth < 600){
            window.scrollTo({
                left:0,
                top:position + headerHeight,
            })
        nav.classList.remove('navHid');
        
    }})
})