// react-basic01-pracitce/src/utils.jsx
const HANDS = ['rock', 'scissor', 'paper'];

const WINS = {
  scissor: 'paper',
  rock: 'scissor',
  paper: 'rock',
};

export function comparedHand(me, other) {
  if (WINS[me] === other) return 1; // 승리
  else if (WINS[other] === me) return -1; // 패배
  else return 0;
}

function random(n) {
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  const resultRandomHand = HANDS[random(HANDS.length)];
  return resultRandomHand;
}
