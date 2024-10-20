const container = document.querySelector('.container');
const all = document.getElementById('full')
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');
const buttons = document.querySelectorAll('button');
const items = [
    {img:'images/breakfast.jpg',name:'Breakfast food',price:'$5', classes : ['food','breakfast']},
    {img:'images/breakfast (1).jpg',name:'Breakfast food',price:'$5', classes : ['food','breakfast']},
    {img:'images/breakfast (2).jpg',name:'Breakfast food',price:'$5', classes : ['food','breakfast']},
    {img:'images/breakfast (3).jpg',name:'Breakfast food',price:'$5', classes : ['food','breakfast']},
    {img:'images/breakfast (4).jpg',name:'Breakfast food',price:'$5', classes : ['food','breakfast']},
    {img:'images/lunch (1).jpg',name:'Great Lunch ',price:'$5', classes : ['food','lunch']},
    {img:'images/lunch (2).jpg',name:'Great Lunch ',price:'$5', classes : ['food','lunch']},
    {img:'images/lunch (3).jpg',name:'Great Lunch ',price:'$5', classes : ['food','lunch']},
    {img:'images/lunch (4).jpg',name:'Great Lunch ',price:'$5', classes : ['food','lunch']},
    {img:'images/lunch (5).jpg',name:'Great Lunch ',price:'$5', classes : ['food','lunch']},
    {img:'images/Dinner (1).jpg',name:'Nice Dinner',price:'$5', classes : ['food','dinner']},
    {img:'images/Dinner (2).jpg',name:'Nice Dinner',price:'$5', classes : ['food','dinner']},
    {img:'images/Dinner (3).jpg',name:'Nice Dinner',price:'$5', classes : ['food','dinner']},
    {img:'images/Dinner (4).jpg',name:'Nice Dinner',price:'$5', classes : ['food','dinner']},
]

function displayAll(clss){
        container.innerHTML = '';
        items.forEach(function(item){
            
            if (item.classes.includes(clss)){
                
                const newItem = document.createElement('div');
                newItem.setAttribute('class','items');
                const img = document.createElement('img');
                img.setAttribute('src', item.img);
                const internal = document.createElement('div');
                internal.setAttribute('class','internal')
                const name = document.createElement('span');
                name.setAttribute('class','sp1');
                name.textContent = item.name;
                const price = document.createElement('span');
                price.setAttribute('class', 'sp2');
                price.textContent = item.price;
                newItem.appendChild(img);
                internal.appendChild(name);
                
                internal.appendChild(price);
                internal.innerHTML += '<hr>';
                internal.innerHTML += 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum repellendus ducimus veniam possimus laboriosam totam soluta debitis iure? Expedita architecto porro, nemo maxime facere exercitationem alias dignissimos ipsam consectetur!'
                newItem.appendChild(internal)
                container.appendChild(newItem);
        
            } 
    })
}
window.onload = displayAll('food');
breakfast.addEventListener('click',display)
breakfast.addEventListener('click',function(){displayAll('breakfast')})
lunch.addEventListener('click',display)
lunch.addEventListener('click',function(){displayAll('lunch')})
dinner.addEventListener('click',display)
dinner.addEventListener('click',function(){displayAll('dinner')})
all.addEventListener('click',display)
all.addEventListener('click',function(){displayAll('food')})


function display(cls){
    const btn = this
    buttons.forEach(function(button){
       
        
        if(button != btn){
            button.classList.remove('active')
        }
        else{
            button.classList.add('active');
        }
    })
    
}