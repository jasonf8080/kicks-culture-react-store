import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../features/filterSlice';

const FilterSearch = () => {
  const dispatch = useDispatch();
  const [tempTitle, setTempTitle] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 || value.length < tempTitle.length) {
      setTempTitle(value);
    }
  };

  return (
    <div className='filter-item-container search-filter-container'>
      <input type="text" placeholder='Search product by name' value={tempTitle} onChange={handleChange}/>

      <button className="filter-search-btn" onClick={() => dispatch(changeFilter({ name: 'title', value: tempTitle }))}>
          Submit
      </button>
    </div>
  );
};

export default FilterSearch;