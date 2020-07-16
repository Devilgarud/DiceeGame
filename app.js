var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

function diceGame() {

  if(player1 > player2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Won";
  } else if(player1 < player2) {
    document.querySelector("h1").textContent = "🚩 Player 2 Won";
  }

    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + player1 + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + player2 + ".png");

}

diceGame();
