import React from 'react';

function Sorting({ setSorting }) {
  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSortingChange}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
}

export default Sorting;
