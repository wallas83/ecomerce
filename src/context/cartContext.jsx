import { useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";

// 1. crear el contexto
export const CartContext = createContext();
// esto es muy diferente pero aca se usa un useReducer
const initialState = []
const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
        case 'ADD_TO_CART': {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id);

            if (productInCartIndex >= 0) {
                // one way to use is structuredClone
                // const newState = structuredClone(state);
                // newState[productInCartIndex].quantity += 1;
                // return newState
                const newState = [
                    ...state.slice(0, productInCartIndex),
                    { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
                    ...state.slice(productInCartIndex + 1)
                ]
                return newState
            }

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
        }
        case 'REMOVE_FROM_CART': {
            const { id } = actionPayload;
            return state.filter(item => item.id !== id)
        }

        case 'CLEAR_CART': {
            return initialState;
        }

    }
}
// 2. crear el provider
export function CartProvider({ children }) {
    //esto se usa sin reducer
    // const [cart, setCart] = useState([]);

    /*
    const addToCart = (product) => {
        //check if the product is already in use
        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if (productInCartIndex >= 0) {
            // one way to use is structuredClone
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart)
            // const newCart = cart.map((item) => {
            //     if (item.id === product.id ) {

            //         return {...item, quantity: item.quantity + 1 };
            //     }
            //     return item; 
            // });
            // setCart(newCart);
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
    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([]);

    }
*/
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
    const removeFromCart = (product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })
    const clearCart = () => dispatch({ type: 'CLEAR_CART' })
    return (
        <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )


}