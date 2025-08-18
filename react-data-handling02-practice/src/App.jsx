// react-data-handling02-practice/src/App.jsx
import { useState, useEffect } from 'react';
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
  const handleLoad = async (orderQuery) => {
    const { foods } = await getFoods(orderQuery);
    setItems(foods);
  };
  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <>
      <div>
        <div>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleCalorieCLick}>칼로리순</button>
        </div>
        <FoodList items={sortItems} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
