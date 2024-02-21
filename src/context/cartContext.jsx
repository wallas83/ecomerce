import { useState } from "react";
import { createContext } from "react";

// 1. crear el contexto
export const CartContext = createContext();

// 2. crear el provider

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        //check if the product is already in use
        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if (productInCartIndex >= 0) {
            // one way to use is structuredClone
            console.log();
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
           return setCart(newCart)
        }
        //if the product isn't in the cart

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const clearCart = () => {
        setCart([]);

    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )


}