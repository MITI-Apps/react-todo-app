import { useState, useEffect } from "react";

const useItems = () => {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("mylist")) || []
  );
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  useEffect(() => {
     localStorage.setItem("mylist", JSON.stringify(items));
  }, [items]);

  const addItem = (text) => {
    if (!text) return;

    const newItem = {
      id: Date.now(),
      text: text,
      completed: false
    };

    const newList = [...items, newItem];
    setItems(newList);
  };

  const itemDelete = (idToDelete) => {
    const newList = items.filter((item) => item.id !== idToDelete);
    setItems(newList);
  };

  const toggleItem = (id) => {
    const checkeditem = items.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    setItems(checkeditem);
  };
  const saveEdit = (id) => {
    const newList = items.map((item) => item.id===id ?
      {...item, text: editText} : item) 
      setItems(newList);
      setEditText("");
      setEditingId(null);
  }
  const clearCompleted = () => {
    const newList = items.filter((item) => !item.completed);
    setItems(newList);
  }

  const toggleAll = () => {
    const allComplete = items.every((item) => item.completed );
    const newList = items.map((item) => ({...item, completed: !allComplete}));
    setItems(newList);
  };

  return {
    items,
    setItems,
    addItem,
    itemDelete,
    toggleItem,
    editingId,
    setEditingId,
    editText,
    setEditText,
    saveEdit,
    clearCompleted,
    toggleAll
  };
};

export default useItems;