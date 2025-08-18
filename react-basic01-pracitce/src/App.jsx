// react-basic01-pracitce/src/App.jsx
import { useState } from 'react';
import Button from './Button.jsx';
import HandButton from './HandButton.jsx';
import HandIcon from './HandIcon.jsx';
import { comparedHand, generateRandomHand } from './utils.jsx';

const INITIAL_HAND_VALUE = 'rock';

function getResult(me, other) {
  const comparison = comparedHand(me, other);
  if (comparison > 0) return '승리';
  else if (comparison < 0) return '패배';
  else return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_HAND_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_HAND_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [bet, setBet] = useState(1);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);

  const handleButtonClick = (value) => {
    const nextHand = value;
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = comparedHand(nextHand, nextOtherHand);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
  };

  const handleClearClick = () => {
    setHand(INITIAL_HAND_VALUE);
    setOtherHand(INITIAL_HAND_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (event) => {
    let num = Number(event.target.value);
    if (num > 9) num = num % 10; // 1과 9 사이의 숫자로 만들어 줌
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div>
      <h1 id="title">가위바위보</h1>
      <div>
        <Button name="처음부터" onClick={handleClearClick} />
        <div>
          {score} : {otherScore}
        </div>
        <p>{getResult(hand, otherHand)}</p>
      </div>
      <div>
        <HandIcon value={hand} />
        vs
        <HandIcon value={otherHand} />
      </div>
      <div>
        <input type="number" value={bet} min={1} max={9} onChange={handleBetChange} />
      </div>

      <p>{`승부 기록: ${gameHistory.join(', ')}`}</p>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
