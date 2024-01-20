import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { handleFilterOpen } from '../features/filterSlice'


const FilterItem = ({filterName, filterComponent}) => {
   const dispatch = useDispatch();
   const {openFilter} = useSelector((store) => store.filter)

    const handleClick = (e) => {
     if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') {
         return;
      } else {
         dispatch(handleFilterOpen(filterName))
      }
    };
   

  return (
    <div className='filter-item' onClick={(handleClick)}>
        <p>{filterName}</p>
        <span className='filter-chevron'>
          {openFilter === filterName ? <FiChevronUp/> : <FiChevronDown/>}
        </span>
        {openFilter === filterName && filterComponent}
    </div>
  )
}

export default FilterItem