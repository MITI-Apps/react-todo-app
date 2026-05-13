import LineItem from "./LineItem"
const ItemList = ({ 
    items, 
    search, 
    toggleItem, 
    itemDelete, 
    editingId, 
    setEditingId, 
    editText, 
    handleEditText, 
    saveEdit,
    setEditText,
    setfilter,
    filter
}) => {
    return (
      <ul>
        {items
          .filter((item) => 
            item.text.toLowerCase().includes(search.toLowerCase())
          )
          .filter((item) => {
            if (filter === "active") return !item.completed;
            if (filter === "completed") return item.completed;
            return true;
          })
          .map((item) => (
            <LineItem
              key={item.id} 
              item={item}
              toggleItem={toggleItem}
              itemDelete={itemDelete}
              editingId={editingId}
              setEditingId={setEditingId}
              editText={editText}
              handleEditText={handleEditText}
              saveEdit={saveEdit}
              setEditText={setEditText}
            />        

          ))}
      </ul>
    );
};
export default ItemList;