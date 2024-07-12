import React from 'react'

function Pagination({ pages, setPages, totPages }) {
    const handlePrev = () => {
        if (pages > 1) setPages(pages - 1);
      };
    
      const handleNext = () => {
        if (pages < totPages) setPages(pages + 1);
      };
    
  return (
    <div>
      <button onClick={handlePrev} disabled={pages === 1}>Previous</button>
      <span>{pages} of {totPages}</span>
      <button onClick={handleNext} disabled={pages === totPages}>Next</button>
    </div>
  )
}

export default Pagination
