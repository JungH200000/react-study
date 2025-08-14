// src/App.jsx
import { useState } from 'react';
import Board from './Board.jsx';
import Button from './Button.jsx';
import './App.css';
import appLogo from './assets/logo.png';

function random(n) {
  return Math.floor(Math.random() * n) + 1;
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={appLogo} alt="logo.png" />
        <h2 className="App-title">주사위 게임</h2>
      </div>
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>
          던지기
        </Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
      <div className="App-boards">
        <div className="Boards">
          <Board className="Board" name="사용자" color="blue" gameHistory={myHistory} />
          <Board className="Board" name="상대" color="red" gameHistory={otherHistory} />
        </div>
      </div>
    </div>
  );
}

export default App;
