'use strict'

let number = (Math.trunc((Math.random() * 20)+ 1));
let guess = Number(document.querySelector('.inn').value);
console.log(number);
let score = 20;
let highScore = 0
const x = function (){
    guess = Number((document.querySelector('.inn').value));
    
      if(guess == ' '){
        if(score < 1){
            document.querySelector('.guess').textContent = '💥 You lost the game!';  
        } else {
        document.querySelector('.guess').textContent = '⛔️ No number!';
        score--;
        }
     }
      else if(guess === number){
        document.querySelector('.guess').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number1').textContent = number;
        document.querySelector('.number1').style.width = '200px';
        document.querySelector('.number1').style.fontSize = '70px';
        document.querySelector('.number1').style.border = '5px dotted green';

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
     else if(guess > number){
        if(score < 1){
            document.querySelector('.guess').textContent = '💥 You lost the game!';  
        } else {
        document.querySelector('.guess').textContent = '📈 Too high!';
        score--;
        }
    }

    else if (guess < number){
        if(score < 1){
            document.querySelector('.guess').textContent = '💥 You lost the game!';  
        } else {
        document.querySelector('.guess').textContent = '📉 Too low!';
        score--;
        }
    }
    
    document.querySelector('.score').textContent = score;
    
     
}
guess = Number(document.querySelector('.inn').value);
const y = function(){
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number1').textContent = '?';
    document.querySelector('.number1').style.fontSize = '70px';
    document.querySelector('.number1').style.width = '150px';
    document.querySelector('.guess').textContent = 'Start Guessing...'; 
    document.querySelector('.inn').value = ' ';
     number = (Math.trunc((Math.random() * 20)+ 1));
    score = 20;
    document.querySelector('.number1').style.border = '0';
    document.querySelector('.score').textContent = score;
}






document.querySelector('.check').addEventListener('click', x);
document.querySelector('.again').addEventListener('click', y);
