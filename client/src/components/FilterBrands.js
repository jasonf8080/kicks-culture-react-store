import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeFilter } from '../features/filterSlice';


const FilterBrands = () => {

 const dispatch = useDispatch();
 const {brand, totalBrands} = useSelector((store) => store.filter);


  return (
    <div className='filter-item-container'>
      <div className='filter-items'>
          {totalBrands.map((item) => {
            return (
              <div className={`${brand === item[0].brand ? 'active filter-brand-item' : 'filter-brand-item'}`}
               onClick={() => dispatch(changeFilter({name: 'brand', value: item[0].brand}))}>
                <div className='filter-brand-item-1'>
                  <span></span>
                  <p>{item[0].brand}</p>
                </div>

                <div>
                  <p className='brand-count'>{`(${item[0].count})`}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default FilterBrands