const AddItem = ({text, setText, handleSubmit}) => {
    return (
        <div className="form">
          
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add an Item..."
          />
          <button type = "submit">Submit</button>
          </form>
      </div>
    );
};

export default AddItem;