'use strict'
let game = [];
let fields = document.querySelectorAll('.gamefield');
let character = [];


class Snake{
    constructor(){
        this.length = 5;
        this.score = 0;
    }
}


let snake = new Snake();
fields.forEach( item => item.addEventListener('mouseover', addRed));
fields.forEach(function(item) {
    game.push(item)
})
    FoodSpawn();
 
    
    

    

    

    
    

    

    
    

    
    // Functions
    function addRed(event){
    if(event.target.classList.contains('green')){
        event.target.classList.remove('green');  
        FoodSpawn();
        snake.length ++;
        // fields.forEach(item => item.classList.remove('head-snake'));
        // character[character.length-1].classList.add('head-snake');
        snake.score +=10; 
        document.querySelector('.score-food p').innerText = snake.score;
    }
    if (event.target.classList.contains('red')) {
        document.querySelector('.score-food>p').innerText -=20
        snake.score -=20;
            snake.length --;
            character[0].classList.remove('red')
            character.splice(0, 1);
        
            if ((snake.score < 0)||(snake.length < 5)) {
        document.querySelector('.remove-score p').innerHTML = '';
        document.querySelector('.game').innerHTML = '';
        document.querySelector('.score-food').innerHTML = '';
        document.querySelector('.game').insertAdjacentHTML('afterbegin', `
        <div class='gameover'><p>Game over</p><button class='button-repeat'>Repeat</button></div>
        `)
        document.querySelector('.button-repeat').addEventListener('click', function(){
            location.reload();
        })
    }
    }

        if ((snake.score === 300)||(snake.length === 400)) {
            document.querySelector('.remove-score p').innerHTML = '';
        document.querySelector('.game').innerHTML = '';
        document.querySelector('.score-food').innerHTML = '';
        document.querySelector('.game').insertAdjacentHTML('afterbegin', `
        <div class='gameover'><p>Congratulations</p></div>
        `)
    }

    

    event.target.classList.add('red');
    character.push(event.target);

    if (character.length > snake.length){
        character[0].classList.remove('red');
        character.shift();
    
    } 
    character[character.length-1].classList.add('head-snake');
    character[character.length-2].classList.remove('head-snake');
}
if ((snake.score < 0)||(snake.length < 5)) {
    document.querySelector('.remove-score p').innerHTML = '';
    document.querySelector('.game').innerHTML = '';
    document.querySelector('.score-food').innerHTML = '';
    document.querySelector('.game').insertAdjacentHTML('afterbegin', `
    <div class='gameover'><p>Game over</p></div>
    `)
}
    if ((snake.score === 100)||(snake.length === 400)) {
        document.querySelector('.remove-score p').innerHTML = '';
    document.querySelector('.game').innerHTML = '';
    document.querySelector('.score-food').innerHTML = '';
    document.querySelector('.game').insertAdjacentHTML('afterbegin', `
    <div class='gameover'><p>Congratulations</p></div>
    `)
    
}

function FoodSpawn() {
    game[getRandomInt(0, document.querySelectorAll('.gamefield:not(.red)').length-1 )].classList.add('green');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}