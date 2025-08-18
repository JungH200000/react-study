// react-basic01-practice/src/Button.jsx
function Button({ name, onClick }) {
  return <button onClick={onClick}>{name}</button>;
}

export default Button;
