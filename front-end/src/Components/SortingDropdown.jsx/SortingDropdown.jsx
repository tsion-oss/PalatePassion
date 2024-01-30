import React from 'react';

const SortingDropdown = ({ sortBy, setSortBy }) => {
    return (
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Default sorting</option>
            <option value="PriceAsc">Price: Low to High</option>
            <option value="PriceDesc">Price: High to Low</option>
        </select>
    );
};

export default SortingDropdown;