
import { Products } from './components/Products.jsx';
import { products as initialProducts } from '../src/mocks/product.json'
import { useState } from 'react';


function App() {
  const [product] = useState(initialProducts);
  const [filter, setFilter] = useState({ category: 'all', minPrice: 0 });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice && (
          filter.category === 'all' || product.category === filter.category
        )
      )
    })
  } 
  const filteredProducts = filterProducts(product)
  return (
    <Products products={filteredProducts} />
  )
}

export default App
