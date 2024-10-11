import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
const List = () => {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "item 1" },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <>
      <main>
        <ul className="flex items-center gap-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />

              <label
                className={item.checked ? "line-through" : ""}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <AiOutlineDelete
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default List;
