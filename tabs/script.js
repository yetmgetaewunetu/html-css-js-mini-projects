const buttons = document.querySelectorAll('button');
const text = document.querySelector('.text-container');

const textItems = {
    'where':"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptas cupiditate provident nobis laudantium nam omnis consequatur dolorum impedit quidem neque itaque saepe officiis explicabo cum similique reprehenderit ut repudiandae?",
    'when':"Eius, architecto? Repellendus ea, voluptatem consectetur neque dolor eos facere ratione culpa accusamus nihil recusandae debitis. Recusandae nemo tenetur velit, cumque minima beatae possimus voluptatum placeat iste nobis. Et, voluptatibus.",
    'ratings':"Quo veniam sequi aspernatur cumque? Laboriosam expedita repudiandae nemo? Animi voluptatum vitae vero aut repellendus. Corporis quia sunt nisi architecto nesciunt cum similique quasi error alias, consequatur, debitis dolores quo!"
}
buttons.forEach(function(e){
    e.addEventListener('click',function(e){
        const buttonIn = e.currentTarget.id;
        text.textContent = textItems[buttonIn];
        e.currentTarget.classList.add('active');
        for(button of buttons){
            if(button.id != buttonIn){
                button.classList.remove('active');
            }
        }
    })
})