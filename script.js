'use strict';
//prepare beginnig state
const scoreEl1 = document.querySelector('#score--0');
const scoreEl2 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentEl1 = document.querySelector('#current--0');
const currentEl2 = document.querySelector('#current--1');
const newBtn = document.querySelector('.btn--new');
// start
scoreEl1.textContent = 0;
scoreEl2.textContent = 0;
diceEl.classList.add('hidden');
let current = 0;
let player = 0;
let score1 = 0;
let score2 = 0;

function switchUser() {
  current = 0;
  currentEl1.textContent = 0;
  currentEl2.textContent = 0;
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--active');
  player === 0 ? (player = 1) : (player = 0);
  document.querySelector(`.player--${player}`).classList.add('player--active');
}

rollBtn.addEventListener('click', () => {
  if (
    Number(scoreEl1.textContent) <= 20 &&
    Number(scoreEl2.textContent) <= 20
  ) {
    const dice = Number(Math.trunc(Math.random() * 6 + 1));
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice !== 1) {
      current += dice;
      document.querySelector(`#current--${player}`).textContent = current;
    } else {
      switchUser();
    }
  }
});
holdBtn.addEventListener('click', () => {
  if (
    Number(scoreEl1.textContent) <= 20 &&
    Number(scoreEl2.textContent) <= 20
  ) {
    if (player === 0) {
      score1 += current;
      scoreEl1.textContent = score1;
    } else if (player === 1) {
      score2 += current;
      scoreEl2.textContent = score2;
    }
  }
  if (
    Number(scoreEl1.textContent) <= 20 &&
    Number(scoreEl2.textContent) <= 20
  ) {
    switchUser();
  } else {
    document.querySelector('.player--active').classList.add('player--winner');
    diceEl.classList.add('hidden');
  }
});
newBtn.addEventListener('click', () => {
  scoreEl1.textContent = 0;
  scoreEl2.textContent = 0;
  diceEl.classList.add('hidden');
  current = 0;
  player = 0;
  score1 = 0;
  score2 = 0;
  currentEl1.textContent = 0;
  currentEl2.textContent = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document
    .querySelector('.player--1')
    .classList.remove('player--active', 'player--winner');
});
