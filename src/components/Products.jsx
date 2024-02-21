import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icon'
import { useCart } from '../hooks/useCart';


export function Products({ products }) {
    const { cart, addToCart, removeFromCart } = useCart();

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <main className='products'>
            <ul>
                {

                    products.map(product => {
                        const isProducInCart = checkProductInCart(product);
                        return (
                            <li key={product.id}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button style={{backgroundColor: isProducInCart ? 'red' : '#09f'}} onClick={() => {
                                        isProducInCart 
                                        ? removeFromCart(product)
                                        : addToCart(product)
                                    }} >
                                        {
                                              isProducInCart
                                              ? <RemoveFromCartIcon/>
                                              : <AddToCartIcon/>  
                                        }
                                    </button>

                                </div>
                            </li>
                        )
                    })}
            </ul>
        </main>
    )
}