import { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import LineItem from "./LineItem";
import ItemList from "./ItemList";
import useItems from "./useItems";

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const { items, 
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
  } = useItems();  

  const handleEditText = (e) => {
    setEditText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(text);
    setText("");
  }
  const allCompleted = items.length > 0 && items.every((item) => item.completed );

  return (
    <div className="container">
      <Header title="My React Practice" />
      <AddItem 
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <div className="filters-container">
        <div className="filters">
          <button 
            className={filter === "all" ? "active" : "" }
            onClick={() => setFilter("all")}>All</button>
          <button 
            className={filter === "active" ? "active" : "" }
            onClick={() => setFilter("active")}>Active</button>
          <button 
            className={filter === "completed" ? "active" : "" }
            onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <button 
          onClick={clearCompleted}
          disabled={!items.some((item) => item.completed)}
          >Clear Completed ({items.filter((item) => item.completed).length})</button>
      </div>
      <button onClick={toggleAll}>{allCompleted ? "Unselect All" : "Select All" }</button>
      <ItemList 
        items={items}
        search={search}
        toggleItem={toggleItem}
        itemDelete={itemDelete}
        editingId={editingId}
        setEditingId={setEditingId}
        editText={editText}
        handleEditText={handleEditText}
        saveEdit={saveEdit}
        setEditText={setEditText}
        setFilter={setFilter}
        filter={filter}
      />        
      
    </div>
  );
}

export default App;