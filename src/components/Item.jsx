export default function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>&times;</button>
    </li>
  );
}
