// /src/App.jsx
import Button from './Button.jsx';
import Dice from './Dice.jsx';
import HandIcon from './HandIcon.jsx';
import HandButton from './HandButton.jsx';

function App() {
  const handleClick = (value) => console.log(value);
  const handleClearClick = () => console.log('처음부터');

  return (
    <div>
      {/* <Button name="처음부터" onClick={handleClearClick} /> */}
      <Button onClick={handleClearClick}>처음부터</Button>

      <Dice color="red" num={3} />
      {/* <HandIcon value="" /> */}
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </div>
  );
}

export default App;
