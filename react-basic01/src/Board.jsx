// react-basic01/src/Board.jsx
import Dice from './Dice.jsx';
import './Board.css';

function Board({ className, name, color, gameHistory }) {
  const classNames = `${className}`;
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  return (
    <div className={classNames}>
      <h2 className="userName">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="total-score board-item">총점</h2>
      <p>{sum}</p>
      <h2 className="record board-item">기록</h2>
      {/* 각 주사위 숫자 값들을 ,(쉼표)로 연결해서 보여줄 것 */}
      <p>{gameHistory.join(', ')}</p>
      {/* join 메소드는 argument로 전달한 값을 배열의 각 요소 사이사이에 넣어서 하나의 문자열로 만들어주는 메소드 */}
    </div>
  );
}

export default Board;
