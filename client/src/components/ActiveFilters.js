import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActiveFilterBtn from './ActiveFilterBtn';
import { clearAllFilters } from '../features/filterSlice';

const ActiveFilters = () => {
    const dispatch = useDispatch();
    const {title, brand, price, sort} = useSelector((store) => store.filter);
    const clearAll = title || brand || price || sort;



  return (
    <div className='active-filters-section'>
        {clearAll && <button className='clear-filters-btn' onClick={() => dispatch(clearAllFilters())}>Clear All</button>}
        {title && <ActiveFilterBtn query={'title'} value={title}/>}
        {brand && <ActiveFilterBtn query={'brand'} value={brand}/>}
        {price && <ActiveFilterBtn query={'price'} value={price}/>}
        {sort && <ActiveFilterBtn query={'sort'} value={sort}/>}
        
    </div>
  )
}

export default ActiveFilters