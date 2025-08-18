// src/Button.jsx
// '던지기', '처음부터' 버튼
import './Button.css';

function Button({ children, onClick, color = 'blue', className = '' }) {
  const classNames = `Button ${color} ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
