import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';


const SortingDropdown = () => {

   const { sortBy, updatedSortBy, setSortBy } = useContext(ShopContext)

    const handleChange = (e) => {
        const newSortBy = e.target.value
        setSortBy(newSortBy)
    }
    
    return (
        <select 
        value={sortBy} 
        onChange={handleChange}
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:w-auto"
      >
        <option value="default">Sort</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
      
    );
};

export default SortingDropdown;