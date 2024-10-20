
const color = document.getElementById('color');
const container = document.getElementById('container');

var hexRange = '0123456789abcdef';
container.style.backgroundColor = 'black';
function changeColor(){
    let current_color = '#';
    while (current_color.length < 7){
        let index = Math.floor(Math.random() * 16);
        current_color += hexRange[index];
    }
    container.style.backgroundColor = current_color;
    color.innerText = current_color;
    console.log(current_color);
}