const myBtn = document.getElementById("myBtn");
const modal = document.getElementById("myModal");
const span = document.querySelector(".close");
const gamelogo = document.querySelector(".gamelogo");
const main = document.querySelector(".main");
const game = document.querySelector(".game");
const hidden = document.querySelector(".hidden");
const playAgain = document.querySelector(".playAgain");
const resultDisplay = document.querySelector("#result");
const infotextOuter = document.querySelector(".infotextOuter");
const infotext = document.querySelector(".infotext");
const rock = "../images/icon-rock.svg";
const paper = "../images/icon-paper.svg";
const scissors = "../images/icon-scissors.svg";
const choices = ["rock", "paper", "scissors"];
const totalScore = document.querySelector("#totalScore");
const clickMe = document.querySelectorAll(".play");

playAgain.addEventListener("click", function startOver() {
  game.innerHTML = "";
  infotextOuter.innerHTML = "";
 
  game.appendChild(gamelogo);
});

/******
 modal function start
 ******/
myBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

/******
 modal function end
 ******/

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = "YOU WIN";
      totalScore.innerHTML = parseInt(totalScore.innerHTML) + 1;
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "YOU LOSE";
      if (totalScore.innerHTML >= 1) {
        totalScore.innerHTML = parseInt(totalScore.innerHTML) - 1;
      }
      break;
    case "scissorsscissors":
    case "rockrock":
    case "paperpaper":
      resultDisplay.innerHTML = "IT'S A DRAW";
      break;
  }
};

clickMe.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target.id);

    let userchioce = e.target.id;

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
   // console.log("cc " + computerChoice);

    let tempcomputerChoice = computerChoice;

    if (computerChoice == "rock") {
      computerChoice = rock;
    } else if (computerChoice == "paper") {
      computerChoice = paper;
    } else if (computerChoice == "scissors") {
      computerChoice = scissors;
    }

    if (
      userchioce == "rock" ||
      userchioce == "paper" ||
      userchioce == "scissors"
    ) {
      game.removeChild(gamelogo);

      if (userchioce == "rock") {
        game.innerHTML = `<img class="play ${userchioce}" id="${userchioce}" src="${rock}" alt="">
     <img class="play ${tempcomputerChoice}" id="${tempcomputerChoice}" src="${computerChoice}" alt="">
              
                       `;
      } else if (userchioce == "paper") {
        game.innerHTML = `<img class="play ${userchioce}" id="${userchioce}" src="${paper}" alt="">
                      <img class="play ${tempcomputerChoice}" id="${tempcomputerChoice}" src="${computerChoice}" alt="">`;
      } else if (userchioce == "scissors") {
        game.innerHTML = `<img class="play ${userchioce}" id="${userchioce}" src="${scissors}" alt="">
                        <img class="play ${tempcomputerChoice}" id="${tempcomputerChoice}" src="${computerChoice}" alt=""> `;
      }
    }
    infotext.style.visibility = "visible";
    infotextOuter.appendChild(infotext)
    getResults(userchioce, tempcomputerChoice);
  });
});
