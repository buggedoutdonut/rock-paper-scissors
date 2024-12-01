const userName = document.querySelector(".userName");
const buttons = document.querySelectorAll(".btns");
const pScore = document.querySelector(".playerScore");
const eScore = document.querySelector(".enemyScore");
const announcerMessage = document.querySelector(".announcerMessage");
let playerScore = 0;
let enemyScore = 0;
let playerHand = "";
let aiHand = "";

let user = prompt("What is your name, Player?", "")
if(user == "" || user == null){ userName.textContent = "Black Cat";} else {userName.textContent = user;}


buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
        playerHand = e.target.id;
        aiHandSelect();
        handComparison();
        scoresAndRounds();
    })

})


function aiHandSelect(){
    let aiRandomizer = Math.floor(Math.random(3) * 3);

    if(aiRandomizer == 0){
        aiHand = 'sword';
    } else if (aiRandomizer == 1){
        aiHand = 'bow';
    } else {
        aiHand = 'dagger';
    }
    console.log(aiHand)
}

function handComparison(){
    if(aiHand == 'sword' && playerHand == 'dagger'){
        enemyScore += 1;
        announcerMessage.textContent = "The AI won this round."
    } else if (aiHand == 'bow' && playerHand =='sword'){
        enemyScore += 1;
        announcerMessage.textContent = "The AI won this round."
    } else if (aiHand == 'dagger' && playerHand =='bow'){
        enemyScore += 1;
        announcerMessage.textContent = "The AI won this round."
    } else if (aiHand == playerHand){
        announcerMessage.textContent = "It's a tie!"
    } else {
        playerScore += 1;
        announcerMessage.textContent = "Congratulations, " + user + " .You won this round."
    }

    pScore.textContent = playerScore;
    eScore.textContent = enemyScore;
}

function scoresAndRounds(){
    if(playerScore == 5){
        announcerMessage.textContent = "Congratulations, Master " + user +" ! You have won the game!"
        alert("The game has finished. You won!");
        playerScore = 0;
        enemyScore = 0;
        pScore.textContent = playerScore;
        eScore.textContent = enemyScore;
    } else if (enemyScore == 5){
        announcerMessage.textContent = "We'll get it next time!"
        alert("The game has finished. You lost.");
        playerScore = 0;
        enemyScore = 0;
        pScore.textContent = playerScore;
        eScore.textContent = enemyScore;
    }
    
}
