let userScore = 0;
let computerScore = 0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard=document.querySelector('.score-board');
const result_div=document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
    }
    function convertCase(anythingIwant) {
        if (anythingIwant === 'paper') return 'Paper';
        if (anythingIwant === 'scissors') return 'Scissors';
        return 'Rock';
        }

        
        