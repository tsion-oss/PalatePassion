import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';


const SortingDropdown = () => {

   const { sortBy, updatedSortBy, setSortBy } = useContext(ShopContext)

    const handleChange = (e) => {
        const newSortBy = e.target.value
        setSortBy(newSortBy)
    }
    
    return (
        <select value={sortBy} onChange={handleChange}>
            <option value="default">Sort</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
        </select>
    );
};

export default SortingDropdown;