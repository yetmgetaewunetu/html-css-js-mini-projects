const input = document.getElementById('display');

appendDisplay = (e) => {
    input.value += e;
}
clearDisplay = () => {
    input.value = '';
}
popLast = () => {
    input.value = input.value.slice(0, -1);
}
calculate = () =>{
    try{
        input.value = eval(input.value);
    }
    catch(error){
        input.value = 'ERROR';
    }
}