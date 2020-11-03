// const cards = document.querySelectorAll(".memory-card");
// let hasFlipped = false;
// let firstCard, secondCard;
// let lockBoard = false;
// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;
//   this.classList.add("flip");
//   if (!hasFlipped) {
//     hasFlipped = true;
//     firstCard = this;
//   } else {
//     hasFlipped = false;
//     secondCard = this;
//     checkForMatch();
//   }
// }

// function checkForMatch() {
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//   isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//   firstCard.removeEventListener("click", flipCard);
//   secondCard.removeEventListener("click", flipCard);
//   resetBoard();
// }

// function unflipCards() {
//   lockBoard = true;
//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");
//     resetBoard();
//   }, 1500);
// }

// function resetBoard() {
//   [hasFlipped, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }

// (function shuffle() {
//   cards.forEach((card) => {
//     let randomPos = Math.floor(Math.random() * 12);
//     card.style.order = randomPos;
//   });
// })();

// cards.forEach((card) => card.addEventListener("click", flipCard));

// **************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************//

const cards = document.querySelectorAll(".memory-card");
const score = document.querySelector(".score");
const failed = document.querySelector(".failed");
let hasFlipped = false;
let firstCard, secondCard;
let lockBoard = false;
let sum = 0;
let f = 0;
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!hasFlipped) {
    firstCard = this;
    hasFlipped = true;
  } else {
    secondCard = this;

    checkForMatch();
  }
}

function checkForMatch() {
  lockBoard = true;
  setTimeout(() => {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    resetBoard();
  }, 1500);
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  sum++;
  score.textContent = sum;
  resetBoard();
}

function unflipCards() {
  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  f++;
  failed.textContent = f;
}

function resetBoard() {
  [hasFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
