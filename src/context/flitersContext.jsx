
import { useState } from "react";
import { createContext } from "react";

// 1.se crea el contexto
export const FiltersContext = createContext();


// 2. crear el provider, para proveer el contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    });

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
                {children}
        </FiltersContext.Provider>
    )
}
