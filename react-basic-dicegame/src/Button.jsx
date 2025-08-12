// /src/Button.jsx
// '던지기', '처음부터' 버튼

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
