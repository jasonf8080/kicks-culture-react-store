import React from 'react'
import {HiChevronLeft} from 'react-icons/hi2'
import FilterSearch from './FilterSearch'
import FilterBrands from './FilterBrands'
import FilterPrices from './FilterPrices'
import ViewResultsBtn from './ViewResultsBtn'


const MobileFilterData = ({showFilter, setShowFilter, setShowFilterComponent}) => {

  return (
    <div className='mobile-filter-item'>
        <div className="mobile-filter-top">
            <div className="container">
                <span onClick={() => setShowFilter(null)}><HiChevronLeft/></span>
                <h3>{showFilter}</h3>
                <span></span>
            </div>
        </div>

        
        <ViewResultsBtn setShowFilterComponent={setShowFilterComponent}/>


        <div className="container">
          {showFilter === 'search' && <FilterSearch/>}
          {showFilter === 'brand' && <FilterBrands/>}
          {showFilter === 'price' && <FilterPrices/>}
        </div>
    </div>
  )
}

export default MobileFilterData