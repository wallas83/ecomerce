import { useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters';
export function Filters() {
    const categories = [
        { cateValue: 'all', cateNombre: 'Todas' },
        { cateValue: 'home-decoration', cateNombre: 'Casa de decoracion' },
        { cateValue: 'laptops', cateNombre: 'Portatiles' },
        { cateValue: 'smartphones', cateNombre: 'Celulares' },
        { cateValue: 'fragrances', cateNombre: 'Fragancias' },
        { cateValue: 'skincare', cateNombre: 'Cuidado de Piel' },
        { cateValue: 'groceries', cateNombre: 'Abarrotes' },

    ]
    const {filters, setFilters } = useFilters();
    // const [minPrice, setMinprice] = useState(0);

    const handleChangeMinPrice = (e) => {
        // aqui algo huele mal
        // DOS FUENTES DE LA VERDAD

        // setMinprice(e.target.value);
        // onChange(prevState => ({
        //     ...prevState,
        //     minPrice: e.target.value
        // }))
        // ====== ESTA ES LA FORMA DE MEJORARLO  con CONTEXT
        // setMinprice(e.target.value);
        setFilters((prevState => ({
            ...prevState,
            minPrice: e.target.value
        })))
    }
    const handleChangeCategory = (event) => {
        // ESTO HUELE MAL
        // estamos pasando la funcnion de actualizar estado
        // nativa de react a un componente hijo
        // setMinPrice(event.prevent.value)
        // onChange(prevState => ({
        //     ...prevState,
        //     category: event.target.value
        // }))
        // ======== esta es la forma de hacer con context
        setFilters(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio apartir de:</label>
                <input
                    type="range"
                    id="price"
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category" onChange={handleChangeCategory}>
                    {
                        categories.map(category => (
                            <option key={category.cateValue} value={category.cateValue}>{category.cateNombre}</option>
                        ))
                    }
                </select>
            </div>

        </section>
    )
}