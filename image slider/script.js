const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


const slides = document.querySelectorAll('.container .slides .slide');
count = 0
slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
    
})
next.addEventListener('click',function(){
    count++;
    slider();
});
prev.addEventListener('click',function(){
    count--;
    slider();
});
function slider(){
        if(count== slides.length){
            count = 0;
        }
        if(count < 0){
            count = slides.length -1;
        }
        slides.forEach(function(slide,index){
            
            slide.style.transform = `translateX(-${count * 100}%)`
            
        })
}