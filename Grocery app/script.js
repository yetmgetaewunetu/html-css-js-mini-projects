const btn = document.getElementById('btn');
const list = document.querySelector('.items');
const input = document.getElementById('input');
const alert = document.querySelector('.warning');
var flag = false;
var editId = 0;
btn.addEventListener('click',addItem)
window.onload = ()=>{
    const items =getLocal();
   
    if(items.length > 0){
        for(item of items){
            createItem(item.id,item.value)
        }
    }
}
function addItem(){
    const value = input.value;
    const id = new Date().getTime();
    
    if(value && !flag){
        createItem(id,value);
        createAlert('Item added successfully!', 'success')
        addToLocalStroage(id,value)
        setDefault();
    }
    else if(value && flag){
        const editable = document.getElementById(editId);
        
        editable.children[0].textContent = value;
        
        createAlert('item Edited', 'success')
       
        editLocal(editId,value)
        setDefault();
    }
    else{
        createAlert('Enter a value','alert')
    }
}

function editItem(e){
    
    const id = e.currentTarget.parentElement.id;
    input.value = document.getElementById(id).children[0].textContent;
    input.focus()
    btn.textContent = 'edit';
    flag = true;
    editId = id
    createAlert('Editing item','success')
    
    
    
        // e.currentTarget.parentElement.children[0].textContent = value;
    
}
function deleteItem(e){
    
   
    e.currentTarget.parentElement.remove();
    const id = e.currentTarget.parentElement.id;
    removeFromLocal(id);
    setDefault()
}
function createAlert(text,type){
    alert.textContent = text;
    alert.classList.add(type);
    setTimeout(function(){
        
        alert.classList.remove(type)
    },1000)
}
function setDefault(){
    btn.textContent = 'Add Item';
    flag = false;
    editId = 0;
    input.value = ''
    input.focus();
}

// setting items to local storage

function addToLocalStroage(id,value){
    let items = getLocal()
    const newItem = {id:id,value:value}
    console.log(items);
    items.push(newItem);
    localStorage.setItem('items',JSON.stringify(items));
    console.log(localStorage.getItem('items'));
}
function createItem(id,value){
    const element = document.createElement('span');
        element.innerHTML += `<p>${value}</p>
        <button id="edit"><img src="pen.png" ></button>
        <button id="delete"><img src="trash.png" ></button>`;
        element.setAttribute('id', id); 
        list.append(element)
        const edit = element.querySelector('#edit')
        edit.addEventListener('click',editItem);
        element.querySelector('#delete').addEventListener('click',deleteItem)
}
function getLocal(){
    return localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')): [];

}
function removeFromLocal(id){
    
    let items = getLocal();
    items = items.filter(function(item){
       
        if(item.id != id){
            console.log('added');
            return item
        }
        
    })
    localStorage.setItem('items',JSON.stringify(items));
    console.log(items);
}
function editLocal(id,value){
    
    let items = getLocal();
    items = items.map(function(item){
        console.log(item.id==id)
        if(item.id == id){
            item.value = value;
        }
        console.log(item);
        return item
    })
    localStorage.setItem('items',JSON.stringify(items))
    console.log(items);
}
// localStorage.removeItem('items')