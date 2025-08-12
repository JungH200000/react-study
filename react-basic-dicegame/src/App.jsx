// /src/App.jsx
import { useState } from 'react';
import Button from './Button.jsx';
import Dice from './Dice.jsx';

function random(n) {
  return Math.floor(Math.random() * n) + 1;
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
  };
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  const handleClick = (value) => console.log(value);

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="red" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {/* 각 주사위 숫자 값들을 ,(쉼표)로 연결해서 보여줄 것 */}
        <p>{gameHistory.join(', ')}</p>
        {/* join 메소드는 argument로 전달한 값을 배열의 각 요소 사이사이에 넣어서 하나의 문자열로 만들어주는 메소드 */}
      </div>
    </div>
  );
}

export default App;
