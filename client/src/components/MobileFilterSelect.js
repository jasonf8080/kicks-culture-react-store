import React from 'react'
import {HiChevronRight} from 'react-icons/hi2'

const MobileFilterSelect = ({name, setShowFilter}) => {
    
  return (
    <div className='mobile-filter-select' onClick={() => setShowFilter(name) }>
        <p>{name}</p>
        <span><HiChevronRight/></span>
    </div>
  )
}

export default MobileFilterSelect