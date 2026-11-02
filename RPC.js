//a function that randomly returns rock, paper, or scissors


let humanScore=0; 
let computerScore=0;

function getComputerChoice(){

  const computerMove = Math.random();
  let cMove = " ";

  if(computerMove <= 0.3)
    {
      cMove = "Rock";
    }
  else if(computerMove < 0.6)
    {
      cMove = "Paper";
    }
  else
    {
      cMove = "Scissors";
    }

  return cMove;

}

function getHumanChoice(){
  let choice = prompt("Pick R P or S");
  if(choice === "R" || choice === "r"){
    choice = "Rock";
  }
  if(choice === "P" || choice === "p"){
    choice = "Paper";
  }
  if(choice === "S" || choice === "s"){
    choice = "Scissors";
  }
  return choice;
}

function playRound(humanChoice, computerChoice){

  if(humanChoice === computerChoice ){
    console.log("it is a tie");
  }
  else if(humanChoice === "Rock" && computerChoice === "Paper"){
   console.log("You Lose! Paper beats Rock");
   computerScore++;
  }
  else if(humanChoice=== "Rock" && computerChoice === "Scissors"){
   console.log("You Win! Rock beats Scissors");
   humanScore++;
  }
  else if(humanChoice=== "Paper" && computerChoice === "Rock"){
   console.log("You Win! Paper beats Rock");
   humanScore++;
  }
  else if(humanChoice=== "Paper" && computerChoice === "Scissors"){
   console.log("You Lose! Scissors beats Paper");
   computerScore++;
  }
  else if(humanChoice=== "Scissors" && computerChoice === "Rock"){
   console.log("You Lose! Rock beats Scissors");
   computerScore++;
  }
  else if(humanChoice=== "Scissors" && computerChoice === "Paper"){
   console.log("You Win! Scissors beats Paper");
   humanScore++;
  }
}


function playGame(){
for(let i = 0; i<5; i++){
  const cChoice = getComputerChoice();
  const hChoice=getHumanChoice();
  console.log(playRound(hChoice, cChoice));

  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);
}
if(humanScore > computerScore){
  console.log("Human beats Computer");
}
else{
  console.log("Computer beats Human");
}
}

playGame();


