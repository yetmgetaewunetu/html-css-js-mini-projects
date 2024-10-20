const list = document.getElementById('list-container');
const input = document.getElementById('input_area');


function addTask(){
    let li = document.createElement('li');
    if(input.value === ''){
        alert("enter a value!")
    }
    else{
        li.innerHTML= input.value;

        list.appendChild(li);
        input.value = '';

        let span = document.createElement('span');
        span.innerHTML = '&Cross;';
        li.appendChild(span);
        save();
    }
    
}

list.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('active');
        save();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        save();
    }
})

function save(){
    let data = list.innerHTML;
    localStorage.setItem('data', data);
}
function load(){
    let data = localStorage.getItem('data');
    list.innerHTML = data;
}
load();