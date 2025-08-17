// src/components/FoodList.jsx
import './FoodList.css';

function FoodListItem({ item, onDelete }) {
  const { id, imgUrl, title, content, calorie } = item;
  const handleDeleteClick = () => onDelete(id);

  return (
    <div className="FoodListItem">
      <div>
        <img src={imgUrl} alt={title} />
        <div>{title}</div>
        <div>{calorie}</div>
        <div>{content}</div>
        <div>
          <button onClick={handleDeleteClick}>삭제</button>
        </div>
      </div>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
