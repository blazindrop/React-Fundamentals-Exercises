const ShoppingListHeader = ({ items, value, onAddItem, onDeleteLastItem, onChange }) => {
    
    const inputIsEmpty = () => value === "";

    const noItemsFound = () => items.length === 0;
    console.log(value);
    return (
        <form onSubmit={onAddItem}>
            <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={onChange}
            />
            <button disabled={inputIsEmpty()}>Add</button>
            <button onClick={onDeleteLastItem} disabled={noItemsFound()}>
                Delete Last Item
            </button>
        </form>
    )
}

export default ShoppingListHeader;