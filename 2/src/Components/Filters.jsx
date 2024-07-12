import React from 'react'

function Filters({ setFilters }) {
    const handleFilterChange = (e) => {
        setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
  return (
    <div>
      <input type="number" name="minPrice" placeholder="Min Price" onChange={handleFilterChange} />
      <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} />
    </div>
  )
}


export default Filters;