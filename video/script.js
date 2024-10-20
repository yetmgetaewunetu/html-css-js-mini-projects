const btn = document.querySelector('button');
const video = document.querySelector('video');
window.addEventListener('load',function(){
  document.querySelector('.pre').style.zIndex= '-1';

})
btn.onclick = ()=>{
  btn.classList.toggle('pause');
  if (video.paused){
    video.play();
  }
  else if(video.played){
    video.pause();
  }
}