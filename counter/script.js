const count = document.getElementById('count');

increase = ()=>{
    let current_value = Number(count.innerText);
    current_value += 1;
    count.innerText = current_value;
}
reset = () =>{
    count.innerText = 0;
}

decrease = () => {
    if (count.innerText <= 0){
        return;
    }
    count.innerText -= 1;
}
