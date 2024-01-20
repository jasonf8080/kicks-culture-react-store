import React, { useState } from 'react'
import MobileFilters from './MobileFilters';
import MobileSort from './MobileSort';



const MobileFilterSection = () => {
  
  const [showFilterComponent, setShowFilterComponent] = useState(null)

  return (
    <>
    <div className='mobile-filter-section'>
        <button onClick={() => setShowFilterComponent('filter')}>Filters</button>
        <button onClick={() => setShowFilterComponent('sort')}>Sort</button>
    </div>

   {showFilterComponent && showFilterComponent === 'filter' && 
    <MobileFilters
     showFilterComponent={showFilterComponent}
     setShowFilterComponent={setShowFilterComponent}
    />}

   {showFilterComponent && showFilterComponent === 'sort' && 
   <MobileSort 
   showFilterComponent={showFilterComponent}
   setShowFilterComponent={setShowFilterComponent}
   />}

   
   </>
  )
}

export default MobileFilterSection