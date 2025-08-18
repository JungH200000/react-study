// react-basic01-practice/src/HandIcon.jsx
// 가위바위보 모양의 아이콘을 보여주는 컴포넌트
import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const SHAPE_IMAGE = {
  scissor: scissorImg,
  rock: rockImg,
  paper: paperImg,
};

function HandIcon({ className, value }) {
  const src = SHAPE_IMAGE[value];
  return <img className={className} src={src} alt={value}></img>;
}

export default HandIcon;
