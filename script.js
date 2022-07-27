let music = new Audio("click.mp3");

let gameOver = new Audio("gameOver.mp3");
let turn = "X";
let isgameover = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 14.8, 45],
    [2, 4, 6, -0.1, 15, -45],
  ];
  wins.forEach((e) => {
    if (
     ( boxText[e[0]].innerText === boxText[e[1]].innerText) &&
     ( boxText[e[2]].innerText === boxText[e[1]].innerText) &&
     ( boxText[e[0]].innerText !== "")
    ) {
      document.querySelector(".info").innerText =
        boxText[e[0]].innerText + "  Won the game";
      isgameover = true;
      // document.querySelector(".img").style.height = "100px";
      document
        .querySelector(".img")
        .getElementsByTagName("img")[0].style.height = "100px";
      document.querySelector(".line").style.width = "30vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;
      gameOver.play();
    }
  });
};

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      music.play();
      checkWin();
      if (isgameover == false) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
        gameOver.pause();
      }
    }
  });
});

const reset = document.getElementById("reset");

reset.addEventListener("click", (e) => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((element) => {
    element.innerText = " ";
  });
  document.querySelector(".img").getElementsByTagName("img")[0].style.height =
    "0px";
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".line").style.width = "0vw";
  gameOver.pause();
});
