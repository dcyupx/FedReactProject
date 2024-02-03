import React, { useState } from 'react';
import './Shop.css';
import { shopData } from '../../Data/Data';

export default function Shop() {
    const [quantities, setQuantities] = useState({});
    const handleQuantityChange = (id, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 0) + delta, 0), 
        }));
    };

  
    const addToCart = (id) => {
        console.log(`Added book ${id} to cart with quantity ${quantities[id] || 0}`);
    };

    return (
        <div className="shop">
            <h1>Books Available</h1>
            <div className="books">
                {shopData.map(book => (
                    <div key={book.id} className="book">
                        <img src={book.image} alt={book.title} className="book-image" />
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                        <p>${book.price}</p>
                        <div className="quantity-controls">
                            <button onClick={() => handleQuantityChange(book.id, -1)}>-</button>
                            <button onClick={() => addToCart(book.id)} className="add-to-cart-btn">Add to Cart</button>
                            <button onClick={() => handleQuantityChange(book.id, 1)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

