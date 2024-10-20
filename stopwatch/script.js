let h1 = document.getElementById('display');
let [micros, seconds, minutes, hours] = [0,0,0,0];
let interval = null;

const Timer = () => {
    
    micros++;

    if (micros == 100){
        micros = 0;
        seconds++;
        if (seconds == 60){
            seconds = 0;
            minutes++;
            if (minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let mi = micros < 10 ? '0' + micros : micros;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let m = seconds < 10 ? '0' + minutes : minutes;
    let h = hours < 10 ? '0' + hours : hours;
    h1.innerHTML = h + ':'+ m + ':' + s + '<br>' + mi;
     
}

function startTimer(){
    if (interval != null){
        clearInterval(interval);
    }
    interval = setInterval(Timer, 10);
}

function stopTimer(){
    clearInterval(interval);
}

const resetTimer = () =>{
    clearInterval(interval);
    [micros, seconds, minutes, hours] = [0,0,0,0];
    h1.innerHTML = '00:00:00:00';
}