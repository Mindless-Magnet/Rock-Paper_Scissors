//getting the buttons
const paperbtn = document.querySelector('.paper');
const rockbtn = document.querySelector('.rock');
const scissorsbtn = document.querySelector('.scissors');
const btns = document.querySelectorAll('button')

//getting the images
const leftImg = document.getElementById('leftimg');
const rightImg = document.getElementById('rightimg');

let playerSelection=""
let computerChoice=""

//getting scores
const userscore = document.querySelector('.userscore');
const compscore = document.querySelector('.compscore');
let gameround = 0;

const round = document.querySelector('.round');

//win and lose messages
const win = document.createElement('div');
win.textContent = "YOU WIN"
win.classList.add('msg');

const score = document.querySelector('.score');

const lose = document.createElement('div');
lose.textContent = "YOU LOSE";
lose.classList.add('msg');

//events to change image on button click
paperbtn.addEventListener('click', function() {
  leftImg.src = '/images/left/paper.png';
  playerSelection="paper"
});

rockbtn.addEventListener('click', function() {
  leftImg.src = '/images/left/rock.png';
  playerSelection="rock"
});

scissorsbtn.addEventListener('click', function() {
  leftImg.src = '/images/left/scissors.png';
  playerSelection="scissors"
});

let computer = 0;
let player = 0;
let i=5;

//play the game
btns.forEach(btn => btn.addEventListener('click', function(){
    getComputerChoice();
    i = playtheGame();
    if(i === 2 ){ 
        
    }
    else{
    gameround++;
    if( (gameround === 6) || (player === 3) || (computer === 3)){
        gameround = 1;
        player = 0;
        computer = 0;
        compscore.textContent = computer ;
        userscore.textContent = player ;
        win.remove();
        lose.remove();
    }
    round.textContent = gameround + " out of 5 rounds";

    if (i === 0) {
        computer++;
        compscore.textContent = computer;
    } else if (i === 1) {
        player++;
        userscore.textContent = player ;
    }

    if (player === 3){
        score.after(win);
    } 
    else if (computer === 3){
        score.after(lose);
    }
}
}));


// functions for the game and computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
  
    if (randomNumber === 1) {
        rightImg.src="images/right/rock.png"
        computerChoice="rock";
    } else if (randomNumber === 2) {
        rightImg.src="images/right/paper.png"
        computerChoice="paper";
    } else {
        rightImg.src="images/right/scissor.png"
        computerChoice="scissors";
    }
}
  
function playtheGame() {
    if (computerChoice === playerSelection) {
        return 2;
    } else if (computerChoice === "rock" && playerSelection === "paper") {
        return 1;
    } else if (computerChoice === "paper" && playerSelection === "scissors") {
        return 1;
    } else if (computerChoice === "scissors" && playerSelection === "rock") {
        return 1;
    } else if (computerChoice === "rock" && playerSelection === "scissors") {
        return 0;
    } else if (computerChoice === "paper" && playerSelection === "rock") {
        return 0;
    } else{
        return 0;
    } 
}
