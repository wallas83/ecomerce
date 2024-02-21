import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icon.jsx'
import { useCart } from '../hooks/useCart.js';

export function Cart() {
    const cartCheckboxId = useId();
    const { cart, clearCart, addToCart } = useCart()

    function CardItem({thumbnail, title, price, quantity, addToCart}) {
        return (
            <li >
                <img
                    src={thumbnail}
                    alt={title}
                />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>
                <footer>
                    <small>
                        Qty:{quantity}
                    </small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
        )
    }
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {
                        cart.map(item => (
                        <CardItem key={item.id}  addToCart={() => addToCart(item)} {...item}/>
                      
                    ))
                    }
                </ul>
                <button onClick={clearCart}><ClearCartIcon /></button>
            </aside>
        </>
    )
}