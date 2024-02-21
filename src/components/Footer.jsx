import { useContext } from 'react';
import { IS_DEVELOPMENT } from '../../config';
import './Footer.css';
import { useFilters } from '../hooks/useFilters';
import { useCart } from '../hooks/useCart';

export function Footer() {
    const {filters} = useFilters();
    const {cart} = useCart();
    return (

        <footer className='footer'>
            <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
            <h5>Shopping cart con useContext & useReducer</h5>

            {
            //  IS_DEVELOPMENT &&   JSON.stringify(filters, null ,2)
            JSON.stringify(cart, null ,2)
            }
        </footer>
    )
}