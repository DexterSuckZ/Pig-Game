"use strict";
let CurrentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

const score0Main = document.querySelector("#score--0");
const score0Current = document.querySelector("#current--0");
const score1Main = document.querySelector("#score--1");
const score1Current = document.querySelector("#current--1");
const diceImg = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const PlayerActiv0 = document.querySelector(".player--0");
const PlayerActiv1 = document.querySelector(".player--1");

// const Player0Current = document.getElementById('')

function switchPlayer() {
  (CurrentScore = 0),
    (document.querySelector(
      `#current--${activePlayer}`
    ).textContent = CurrentScore);
  activePlayer = activePlayer === 0 ? 1 : 0;
  PlayerActiv0.classList.toggle("player--active");
  PlayerActiv1.classList.toggle("player--active");
}

score0Main.textContent = 0;
score1Main.textContent = 0;

diceImg.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${dice}.png`;
    if (dice !== 1) {
      CurrentScore = dice + CurrentScore;
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = CurrentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] = score[activePlayer] + CurrentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    console.log(score[activePlayer]);
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  playing = true;
  score[activePlayer] = 0;
  CurrentScore = 0;
  activePlayer = 0;
  score0Main.textContent = 0;
  score0Current.textContent = 0;
  score1Main.textContent = 0;
  score1Current.textContent = 0;
  console.log(activePlayer);
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");

  // switchPlayer();
});
