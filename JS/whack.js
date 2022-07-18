let score = document.querySelector("#score");
let holes = document.querySelectorAll(".square");
let playBtn = document.getElementById("start");
let stopBtn = document.getElementById("reset");
let image = document.getElementById("yes");
const select = document.querySelector("#select");
const displayLavel = document.querySelector(".selected_lavel");
const massage = document.querySelector(".massage");
const lastScore = document.querySelector("#last-score");
//let image = document.createElement("img");
let level = "Easy";
let inTime = 1000;
let outTime = 900;
let points = 0;
massage.innerHTML = "Easy Level Selected";
displayLavel.innerHTML = `Level -: ${level}`;

// start button clicked
playBtn.addEventListener("click", () => {
  // timer starting
  points = 0;
  massage.innerHTML = "";
  const startTime = 1;
  let time = startTime * 60;

  const count = document.getElementById("time-left");
  stop = setInterval(timer, 1000);

  function timer() {
    const minits = Math.floor(time / 60);
    let second = time % 60;

    if (second < 10) {
      second = "0" + second;
    }

    if (second === "0-1") {
      clearInterval(stop);
      clearInterval(getRandomLocation);
      score.innerHTML = "0";

      lastScore.innerHTML = `Last Score Was ${points}`;
      return gameOver();
    }
    count.innerHTML = `${minits}:${second}`;
    time--;
  }

  // timer end

  // button disabled

  playBtn.setAttribute("disabled", " ");
  stopBtn.removeAttribute("disabled", " ");

  let hole;

  // generating random number
  
  getRandomLocation = setInterval(() => {
    let random = Math.floor(Math.random() * 9);

    hole = holes[random];

    hole.appendChild(image);
    image.style.visibility = "visible";

    setTimeout(() => {
      hole.removeChild(image);
    }, outTime);
  }, inTime);

  
});

// reset button
stopBtn.addEventListener("click", () => {
  clearInterval(getRandomLocation);
  playBtn.removeAttribute("disabled", " ");
  clearInterval(stop);

  lastScore.innerHTML = `Last Score Was ${score.innerHTML}`;
  gameOver();
});

// game over function
function gameOver() {
  document.getElementById("time-left").innerHTML = "01:00";
  document.getElementById("time-left").style.fontSize = "25px";
  document.getElementById("start").removeAttribute("disabled");
  document.getElementById("reset").setAttribute("disabled", "");
  document.getElementById("score").innerHTML = "0";

}

select.addEventListener("change", (e) => {
  points = 0;
  level = e.target.value;
  massage.innerHTML = `${level} Level Selected`;
  displayLavel.innerHTML = `Level -: ${e.target.value}`;
  if (level === "Hard") {
    inTime = 800;
    outTime = 600;
  } else if (level === "Medium") {
    inTime = 900;
    outTime = 700;
  } else if (level === "Easy") {
    inTime = 1000;
    outTime = 900;
  }

  window.clearInterval(getRandomLocation);
  clearInterval(stop);
  gameOver();
  lastScore.innerHTML = "";
});

// click event
window.addEventListener("click", (e) => {
  if (e.target.id === "yes") {
    score.innerHTML = ++points;
  }
});
