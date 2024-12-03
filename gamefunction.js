const userName = document.querySelector(".userName");
const buttons = document.querySelectorAll(".btns");
const pScore = document.querySelector(".playerScore");
const eScore = document.querySelector(".enemyScore");
const announcerMessage = document.querySelector(".announcerMessage");
const playerMessage = document.querySelector(".playerMessage");
const enemyMessage = document.querySelector(".enemyMessage");

let playerScore = 0;
let enemyScore = 0;
let playerHand = "";
let aiHand = "";
let iMessage = 0;
let iAiMessage = 0;
let aMessageEnd = "";
let iEnemyMessage = 0;
let eMessage = "";
let pMessage = "";
let randomNumber;
let didAiWon = "";
let aMessageRandom = "";
let user = prompt("What is your name, Player?", "")
if(user == "" || user == null){ userName.textContent = "Black Cat";} else {userName.textContent = user;}

buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
        announcerMessage.textContent = "";
        enemyMessage.textContent = "";
        eMessage = "";
        aMessageRandom = "";
        iAiMessage = 0;
        iEnemyMessage = 0;
        aMessageEnd = "";
        iMessage = 0;
        playerHand = e.target.id;
        randomNumber = Math.floor(Math.random(5) * 4);
        aiHandSelect();
        handComparison();
        if(playerScore == 5 || enemyScore == 5){ scoresAndRounds();}
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
}

function handComparison(){
    if(aiHand == 'sword' && playerHand == 'dagger' 
        || aiHand == 'bow' && playerHand =='sword'
        || aiHand == 'dagger' && playerHand =='bow'){
        enemyScore += 1;
        didAiWon = "Yes";
        assistantMessageEnemy();
        enemyRandomMessage();
    } else if (aiHand == playerHand){
        announcerMessage.textContent = "It's a tie!"
    } else {
        playerScore += 1;
        didAiWon = "No";
        assistantMessageUser();
        enemyRandomMessage();
        
    }

    pScore.textContent = playerScore;
    eScore.textContent = enemyScore;
}

function scoresAndRounds(){
    endMessage();
    pScore.textContent = playerScore;
    eScore.textContent = enemyScore;
    alert("The game has finished.");
    
}
function endMessage(){
        // This line of codes is for when the score reaches 5
        if(playerScore == 5){
            aMessageEnd = "Congratulations, Master " + user +"! You have won the game!";
        } else if(enemyScore == 5){
            aMessageEnd = "..It's okay, we'll get it next time...";
        }

        if(iMessage==aMessageEnd.length - 1){
            iMessage = 0;
            playerScore = 0;
            enemyScore = 0;
            aMessageEnd = "";
        } else {
            if(playerScore == 5){
                announcerMessage.textContent += aMessageEnd.at(iMessage);
                setTimeout(endMessage, .1);
                iMessage++;
            } else if (enemyScore == 5){
                announcerMessage.textContent += aMessageEnd.at(iMessage);
                setTimeout(endMessage, .1);
                iMessage++;
            }
        }   
    
}

// Asssistant Message when Enemy wins
function assistantMessageEnemy(){
    if(playerScore!=5 && enemyScore != 5 && didAiWon=="Yes"){
        console.log(randomNumber); if(randomNumber == 0){
            aMessageRandom = "...It seems like this round goes to the Enemy!...";
        } else if (randomNumber == 1){
            aMessageRandom = "...Don't lose hope! You can still win this...";
        } else if (randomNumber == 2){
            aMessageRandom = "...They're getting ahead of us. Let's step up!!";
        } else {
            aMessageRandom = "...Let's get them next round...";
        }

      
            if(iAiMessage == aMessageRandom.length - 1){
                aMessageRandom = "";
                iAiMessage = 0;
            } else {
                announcerMessage.textContent += aMessageRandom.at(iAiMessage);
                setTimeout(assistantMessageEnemy, .1);
                iAiMessage++;
            }
    }
}

function assistantMessageUser(){
    if(playerScore!=5 && enemyScore != 5 && didAiWon=="No"){
        if(randomNumber == 0){
            aMessageRandom = "...Good going! Let's keep winning...";
        } else if (randomNumber == 1){
            aMessageRandom = "...We're on a hot streak, let's do this...";
        } else if (randomNumber == 2){
            aMessageRandom = "...Wait, can you read the enemy's mind?!..";

        } else {
            aMessageRandom = "...The enemy is panicking, let's keep the pressure!..";
        }

            if(iAiMessage == aMessageRandom.length - 1){
                aMessageRandom = "";
                iAiMessage = 0;
            } else {
                announcerMessage.textContent += aMessageRandom.at(iAiMessage);
                setTimeout(assistantMessageUser, 1);
                iAiMessage++;
            }
    }
}

function enemyRandomMessage(){
    if(playerScore!=5 && enemyScore != 5 && didAiWon == "Yes"){
        if(randomNumber == 0){
            eMessage = "...Huh, so you're all talk with no skills to back it up..."
        } else if (randomNumber == 1){
            eMessage = "...Nah, I'd win? You're a fraud..."
        } else if (randomNumber == 2){
            eMessage = "...You can't skibidi me with that level of rizz..."
        } else if(randomNumber == 3) {
            eMessage = "...My grandma can play better than you..."
        }
    }

    if(playerScore!=5 && enemyScore != 5 && didAiWon == "No"){
        if(randomNumber == 0){
            eMessage = "...You're cheating! How could I lose to someone like you...";
        } else if (randomNumber == 1){
            eMessage = "..Damn it...";
        } else if (randomNumber == 2){
            eMessage = "..I can't stand this!..";
        } else if(randomNumber == 3) {
            eMessage = "..I'LL GET BACK AT YOU!.";
        }
    }
        
    if(playerScore == 5){
        eMessage = "..HOW CAN THIS BE?!";
    } else if(enemyScore == 5){
        eMessage = "..Stand proud, you're strong..";
    }


    if(iEnemyMessage == eMessage.length - 1){
        iEnemyMessage = 0;
        eMessage = "";
    } else {
        enemyMessage.textContent += eMessage.at(iEnemyMessage);
        setTimeout(enemyRandomMessage, 0.1);
        iEnemyMessage++;
    }

    
}
