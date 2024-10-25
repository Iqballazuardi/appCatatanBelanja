import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

// const groceryItems = [
//   {
//     id: 1,
//     name: "Kopi Bubuk",
//     quantity: 2,
//     checked: true,
//   },
//   {
//     id: 2,
//     name: "Gula Pasir",
//     quantity: 5,
//     checked: false,
//   },
//   {
//     id: 3,
//     name: "Air Mineral",
//     quantity: 3,
//     checked: false,
//   },
//   {
//     id: 4,
//     name: "Beng Beng",
//     quantity: 10,
//     checked: true,
//   },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems([...items, item]);
  }
  function handleRemoveItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }
  function handleToggleItem(id) {
    setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }
  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItem} />
      <GroceryList items={items} onRemoveItem={handleRemoveItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}
