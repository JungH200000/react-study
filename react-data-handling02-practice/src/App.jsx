// react-data-handling-practice/src/App.jsx
import { useState } from 'react';
import FoodList from './components/FoodList.jsx';
import { getFoods } from './api.js';

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');
  const sortItems = [...items].sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleCalorieCLick = () => setOrder('calorie');
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  const handleLoadClick = async () => {
    const { foods } = await getFoods();
    setItems(foods);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleCalorieCLick}>칼로리순</button>
        </div>
        <FoodList items={sortItems} onDelete={handleDelete} />
        <button onClick={handleLoadClick}>불러오기</button>
      </div>
    </>
  );
}

export default App;
