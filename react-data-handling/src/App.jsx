import { useState } from 'react';
import ReviewList from './components/ReviewList';
import mockItems from './mock.json';

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState('createdAt');
  const sortedItems = [...items].sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  // id를 parameter로 받아와서 해당 id를 가진 요소를 filter메소드로 걸러내고, nextItems에 지정
  // react가 재렌더링하면 화면에 반영됨
  return (
    <>
      <div>
        <div>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleBestClick}>베스트순</button>
        </div>
        <ReviewList items={sortedItems} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
