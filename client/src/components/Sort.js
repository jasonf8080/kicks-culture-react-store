import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../features/filterSlice';
import { sortOptions } from '../utils/data';

const Sort = () => {
    const dispatch = useDispatch();
    const {sort} = useSelector((store) => store.filter);

  return (
    <div className='sort-item-container'>
      <div className='filter-items'>
          {sortOptions.map((item) => {
            return (
              //give it a class of active
              <div className={`${sort === item.value ? 'active sort-item' : 'sort-item'}`}
               onClick={() => dispatch(changeFilter({name: 'sort', value: item.value}))}>
                <div className='sort-item-1'>
                  <span></span>
                  <p>{item.text}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Sort