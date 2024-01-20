import React from 'react'
import FilterItem from './FilterItem'
import FilterBrands from './FilterBrands'
import FilterPrices from './FilterPrices'
import FilterSearch from './FilterSearch'
import Sort from './Sort'

const Filters = () => {

  return (
    <div className='filters-section'>
        <div className='filters'>
           <FilterItem filterName='search' filterComponent={<FilterSearch/>}/>
            <FilterItem filterName='brand' filterComponent={<FilterBrands/>}/>
            <FilterItem filterName='price' filterComponent={<FilterPrices/>}/>
        </div>
        
          <FilterItem filterName='sort' filterComponent={<Sort/>}/>
    </div>
  )
}

export default Filters