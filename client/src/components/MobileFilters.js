import React, { useState } from 'react'
import {LiaTimesSolid} from 'react-icons/lia'
import MobileFilterSelect from './MobileFilterSelect'
import MobileFilterItem from './MobileFilterItem'
import { useDispatch, useSelector } from 'react-redux'
import ViewResultsBtn from './ViewResultsBtn'
import { clearFilters } from '../features/filterSlice'

const MobileFilters = ({showFilterComponent, setShowFilterComponent}) => {
    const [showFilter, setShowFilter] = useState(null)

    const dispatch = useDispatch();
    

  return (
    <div className='mobile-filter-container'>
        <div className="mobile-filter-top">
            <div className="container">
                <span onClick={() => setShowFilterComponent(null)}><LiaTimesSolid/></span>
                <h3>Filter by</h3>
                <button className='btn-underline' onClick={() => dispatch(clearFilters())}>Clear</button>
            </div>
        </div>

        <div className="container">
            <div className='mobile-filter'>
                <MobileFilterSelect name='search' setShowFilter={setShowFilter}/>
                <MobileFilterSelect name='brand' setShowFilter={setShowFilter}/>
                <MobileFilterSelect name='price' setShowFilter={setShowFilter}/>
           </div>
        </div>

        <ViewResultsBtn setShowFilterComponent={setShowFilterComponent}/>

        {/* Another Component Position Absolute (translateX(100%)) */}
        <div className={`${showFilter && 'active'} absolute-mobile-filter-data left`}>
            <MobileFilterItem showFilter={showFilter} setShowFilter={setShowFilter} setShowFilterComponent={setShowFilterComponent}/>
        </div>
        
    </div>
  )
}

export default MobileFilters