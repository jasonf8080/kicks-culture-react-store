import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../features/filterSlice';
import {LiaTimesSolid} from 'react-icons/lia'

const ActiveFilterBtn = ({query, value}) => {
    const dispatch = useDispatch();

  return (
    <div className={`active-filter-btn-${query} active-filter-btn `}>
        <span onClick={() => dispatch(changeFilter({name: query, value: ''}))}><LiaTimesSolid/></span>
        <p>{value}</p>
   </div>
  )
}

export default ActiveFilterBtn