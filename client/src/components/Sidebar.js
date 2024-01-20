import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { useDispatch } from 'react-redux'
import { clearAllFilters } from '../features/filterSlice'
import { Link } from 'react-router-dom'

const Sidebar = ({showSidebar, setShowSidebar}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        setShowSidebar(false)
        dispatch(clearAllFilters())
    }

  

    

  return (
    <div className={`${showSidebar && 'active'} sidebar`}>
        <div className="container">
            <div className="sidebar-top">
                <button className='sidebar-exit-btn' onClick={handleClick}><LiaTimesSolid/></button>
            </div>

              <ul className="links">
                <li><Link to='/' onClick={handleClick}>Home</Link></li>
                <li><Link to='/about' onClick={handleClick}>About</Link></li>
                <li><Link to='/products' onClick={handleClick}>Products</Link></li>
                <li><Link to='/cart' onClick={handleClick}>Cart</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar