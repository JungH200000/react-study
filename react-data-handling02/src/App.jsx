// react-data-handling02/App.jsx
import { useState, useEffect } from 'react';
import ReviewList from './components/ReviewList';
import { getReviews } from './api';

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');
  // const sortedItems = [...items].sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');

  const handleBestClick = () => setOrder('rating');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  // orderQuery라는 파라미터를 받아서 getReviews로 넘겨준다.
  const handleLoad = async (orderQuery) => {
    const { reviews } = await getReviews(orderQuery); // 디스트럭쳐링
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <>
      <div>
        <div>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleBestClick}>베스트순</button>
        </div>
        <ReviewList items={items} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
