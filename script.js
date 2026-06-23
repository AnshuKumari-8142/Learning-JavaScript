let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("Game was draw!")
    msg.innerText = "Game was draw! Play Again";
    msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        computerScorepara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user Choice = ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        //  draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){

        // comp choice = paper, Scissor
        userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){

            //compChoice = Rock, scissor
            userWin = compChoice === "Rock" ? true : false;
        }else {
            // user choice = scissor
            //comp choice = rock, paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});