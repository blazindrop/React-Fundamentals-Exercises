
import ShoppingListHeader from './ShoppingListHeader';
import logo from '../logo.svg';
import { useState } from 'react';

const ShoppingList = () => {
    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const addItem = (event) => {
        event.preventDefault();
        setItems([...items, value]);
        setValue("");
    };

    const deleteLastItem = (event) => {
        console.log(`Items is ${items}`);
        setItems(items.slice(0, -1));
    };

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        
        <ShoppingListHeader
            items={items}
            value={value}
            onAddItem={addItem}
            onDeleteLastItem={deleteLastItem}
            onChange={handleChange} />
        
        <p className="items">Items</p>
        <ol className="item-list">
            {items.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ol>
        </div>
    )
}

export default ShoppingList;