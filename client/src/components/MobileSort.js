import React from 'react'
import Sort from './Sort'
import { useDispatch, useSelector } from 'react-redux';
import {LiaTimesSolid} from 'react-icons/lia'
import ViewResultsBtn from './ViewResultsBtn';
import { clearSort } from '../features/filterSlice';

const MobileSort = ({showFilterComponent, setShowFilterComponent}) => {
    const dispatch = useDispatch();

  return (
   <div className='mobile-filter-container'>
        <div className="mobile-filter-top">
            <div className="container">
                <span onClick={() => setShowFilterComponent(null)}><LiaTimesSolid/></span>
                <h3>Sort</h3>
                <button className='btn-underline' onClick={() => dispatch(clearSort())}>Clear</button>
            </div>
        </div>

        <div className="container">
            <Sort/>
        </div>

        

       <ViewResultsBtn setShowFilterComponent={setShowFilterComponent}/>

        
    </div>
  )
}

export default MobileSort