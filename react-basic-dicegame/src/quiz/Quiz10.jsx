// /src/quiz/Quiz10.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const WINS = { 가위: '보', 바위: '가위', 보: '바위' };
function getResult(me, other) {
  if (WINS[me] === other) return '승리';
  else if (me === WINS[other]) return '패배';
  else return '무승부';
}
const me = '바위';
const other = '가위';
const result = getResult(me, other);

function handleClick() {
  console.log('가위바위보!');
}

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <h1 id="title">가위바위보</h1>
      <h2>{result}</h2>
      <button className="hand" onClick={handleClick}>
        가위
      </button>
      <button className="hand" onClick={handleClick}>
        바위
      </button>
      <button className="hand" onClick={handleClick}>
        보
      </button>
    </StrictMode>
  </>
);

export default Quiz10;
