
import { Products } from './components/Products.jsx';
import { products as initialProducts } from '../src/mocks/product.json'
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';

import { useFilters } from './hooks/useFilters.js';
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cartContext.jsx';




function App() {

  
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
