"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, quantity, category });
        alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>
                    Item Name:
                    <input type="text" placeholder="Item Name" value={name} onChange={(event) => setName(event.target.value)} style={{ marginLeft: '10px' }} />
                </label>
                <label>
                    Quantity:
                    <input type="number" min="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} style={{ marginLeft: '10px' }} />
                </label>
                <label>
                    Category:
                    <select value={category} onChange={(event) => setCategory(event.target.value)} style={{ marginLeft: '10px' }}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                    </select>
                </label>
                <button type="submit" style={{ marginTop: '10px' }}>Add</button>
            </form>
        </div>
    );
}
