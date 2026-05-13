import { useRef, useEffect } from "react";
const LineItem = ({
    item,  
    toggleItem, 
    itemDelete, 
    editingId, 
    setEditingId, 
    editText, 
    handleEditText, 
    saveEdit,
    setEditText
}) => {
const inputRef = useRef(null);
useEffect(() => {
  if (editingId === item.id ) {
    inputRef.current.focus();
  }
}, [editingId])
    return (
        <li className="item">

            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
            />

            {editingId === item.id ? (
              <>
                <input
                  ref={inputRef}
                  type="text"
                  value={editText}
                  onChange={handleEditText}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setEditingId(null);
                      setEditText("");
                    }
                    if (e.key === "Enter") {
                      saveEdit(item.id);
                    }
                  }}                  
                />

                <button onClick={() => saveEdit(item.id)}>
                Save
                </button>
              </>
            ) : (
             <>
                <span className={item.completed ? "completed" : ""}>
                {item.text}
                </span>

                <button onClick={() => {
                setEditingId(item.id);
                setEditText(item.text);
                }}>
                Edit
                </button>
              </>
            )}

            <button onClick={() => itemDelete(item.id)}>
            Delete
            </button>

        </li> 
    );
};

export default LineItem;