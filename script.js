let userScore = 0;
let CompScore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const CompScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
  // paper , rock and scisors
  const options = ["rock","paper", "scissors"];
  const randIdx = Math.floor(Math.random () * 3);
  return options[randIdx];
}
const drawGame = ()=>{
    msg.innerText = "Game was draw Play again";
    msg.style.backgroundColor= "#081b38"
}
const showWinner = (userWin , userChoice , compChoice) => {
   if(userWin){
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";

   }else{
    CompScore++;
    CompScorepara.innerText =CompScore;
    msg.innerText = `You lost!  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="red";

   }
}

const Playgame = (userChoice) =>{
  const compChoice = genCompChoice();
if(userChoice === compChoice){
    drawGame();
}else{
    let userWin =true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    }else{
        userWin = compChoice ==="rock" ? false : true;
    }
    showWinner(userWin , userChoice, compChoice);
}

}
 
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        Playgame(userChoice);
    })
})