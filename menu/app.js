const items = [
    {img:'images/breakfast.jpg',name:'Breakfast food',price:'$5', cat:'breakfast'},
    {img:'images/breakfast (1).jpg',name:'Breakfast food',price:'$5',cat:'breakfast'},
    {img:'images/breakfast (2).jpg',name:'Breakfast food',price:'$5',cat:'breakfast'},
    {img:'images/breakfast (3).jpg',name:'Breakfast food',price:'$5',cat:'breakfast'},
    {img:'images/breakfast (4).jpg',name:'Breakfast food',price:'$5',cat:'breakfast'},
    {img:'images/lunch (1).jpg',name:'Great Lunch ',price:'$5', cat:'lunch'},
    {img:'images/lunch (2).jpg',name:'Great Lunch ',price:'$5',cat:'lunch'},
    {img:'images/lunch (3).jpg',name:'Great Lunch ',price:'$5',cat:'lunch'},
    {img:'images/lunch (4).jpg',name:'Great Lunch ',price:'$5',cat:'lunch'},
    {img:'images/lunch (5).jpg',name:'Great Lunch ',price:'$5',cat:'lunch'},
    {img:'images/Dinner (1).jpg',name:'Nice Dinner',price:'$5',cat:'dinner'},
    {img:'images/Dinner (2).jpg',name:'Nice Dinner',price:'$5',cat:'dinner'},
    {img:'images/Dinner (3).jpg',name:'Nice Dinner',price:'$5',cat:'dinner'},
    {img:'images/Dinner (4).jpg',name:'Nice Dinner',price:'$5', cat:'dinner'},
]
const container = document.querySelector('.container')

displayItems(items);
function displayItems(items){
    let maps = items.map(function(item){
        return `   <div class="items">
        <img src="${item.img}"
         alt="">
         <div class="internal">
            <span class="sp1">${item.name}</span>
            <span class="sp2">${item.price}</span>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio magnam iusto incidunt iste dignissimos possimus voluptatem impedit totam nemo ratione porro provident eius esse asperiores dicta excepturi, neque voluptas.</p>
         </div>
    </div>   
`   
    });
  
    maps = maps.join('');
    container.innerHTML = maps
    
}
const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        activateButton(e)
        
        const catagory = e.currentTarget.dataset.id;
        
        const catagoryItems = items.filter(function(item){
            if(item.cat == catagory){
                return item;
            }
        })
        if(catagory == 'all'){
            displayItems(items);
        }
        else{
            displayItems(catagoryItems);
        }
    })
});
function activateButton(e){
    
    buttons.forEach(function(button){
        
        if(button.id == e.currentTarget.dataset.id){
            button.classList.add('active')
           
        }
        else{
            button.classList.remove('active')
        }
    })
}