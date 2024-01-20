import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../features/filterSlice'
import { prices } from '../utils/data'


const FilterPrices = () => {
  const dispatch = useDispatch();
  const {price} = useSelector((store) => store.filter)

  return (
   <div className='filter-item-container'>
      <div className='filter-items'>
          {prices.map((item) => {
            return (
              //give it a class of active
              <div className={`${price === item ? 'active filter-price-item' : 'filter-price-item'}`}
               onClick={() => dispatch(changeFilter({name: 'price', value: item}))}>
                <div className='filter-price-item-1'>
                  <span></span>
                  <p>{item}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default FilterPrices