import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const addToCart = (item, id) => {
        setSelectedItems((prevItems) => {
            const isSelected = prevItems.some(item=>item.id === id);
            if(!isSelected){
                return [...prevItems, item];
            }
            return prevItems;
        });
    };
    const removeFromCart = (id) => {
        setSelectedItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ selectedItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}