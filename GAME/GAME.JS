let userScore = 0;
let computerScore = 0;
let moves=0;
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
        function win(user, computer) {
            userScore++;
            userScore_span.innerHTML = userScore;
            moveclick();
const userName = ' (user)'.fontsize(3).sup();
const compName = ' (comp)'.fontsize(3).sup();
result_div.innerHTML=`<p>${convertCase(user)}${userName}beat${convertCase(computer)}${compName}.You Win!</p>`;
roundStatus.classList.add('winningStyles');
setTimeout(() => roundStatus.classList.remove('winningStyles'), 5);
        }
        function loses(user, computer) {
            computerScore++;
            computerScore_span.innerHTML = computerScore;
            moveclick();
const userName = ' (user)'.fontsize(3).sup();
const compName = ' (comp)'.fontsize(3).sup();
result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('losingStyles');
setTimeout(() => roundStatus.classList.remove('losingStyles'), 5);
}
function draw(user, computer) {
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
    const roundStatus = document.getElementById(user);
roundStatus.classList.add('drawStyles');
setTimeout(() => roundStatus.classList.remove('drawStyles'), 5);
}



function moveclick()
// document.getElementById("movesleft").innerHTML
{

    if (userScore==5)
{
   alert("you win")
}
else if(computerScore==5)
{
    alert("computer win")

}
}






function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
        win(userChoice, computerChoice);
        break;
case 'rockpaper':
case 'scissorsrock':
case 'paperscissors':
loses(userChoice, computerChoice);
break;
case 'rockrock':
case 'scissorsscissors':
case 'paperpaper':
draw(userChoice, computerChoice);
console.log("draw");
break;
}
}

   
function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
    }
    main();


    // userScore_span.forEach(option => {
    //     option.addEventListener('click',function(){

    //         const movesLeft = document.querySelector('.movesleft');
    //         moves++;
    //         movesLeft.innerText = `Moves Left: ${10-moves}`;
             

    //         const choiceNumber = Math.floor(Math.random()*3);
    //         const computerChoice = computerScore_span[choiceNumber];

    //         // Function to check who wins
    //         winner(this.innerText,computerChoice)
             
    //         // Calling gameOver function after 10 moves
    //         if(moves == 10){
    //             gameOver(userScore_span,movesLeft);
    //         }
    //     })
    // })
     
