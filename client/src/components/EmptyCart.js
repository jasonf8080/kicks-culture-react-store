import React from 'react'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearFilters } from '../features/filterSlice'

const EmptyCart = () => {
    const dispatch = useDispatch();

  return (
    <div className='container empty-section'>
         <span><HiOutlineShoppingBag/></span>
        <h2 className='text-md'>Your Cart Is Empty</h2>
        <Link to='/products' onClick={() => dispatch(clearFilters())}><button className="btn-black">Shop Products</button></Link>
    </div>
  )
}

export default EmptyCart