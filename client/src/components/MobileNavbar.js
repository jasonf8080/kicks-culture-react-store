import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import UserLinks from './UserLinks'
import NonUserLinks from './NonUserLinks'
import { Link } from 'react-router-dom'
import {HiOutlineBars3CenterLeft} from 'react-icons/hi2'
import Sidebar from './Sidebar'
import { handleShowLinks } from '../features/authSlice'


const MobileNavbar = () => {
    const dispatch = useDispatch();
    const {user, showLinks} = useSelector((store) => store.auth) 
    const {totalItems} = useSelector((store) => store.cart)

  
   const [showSidebar, setShowSidebar] = useState(false);

    const handleClick = (e) => {
      dispatch(handleShowLinks())
    };


  return (
    <div className='mobile-navbar'>
        <div className="container mobile-navbar-container">
            <button className='menu-btn' onClick={() => setShowSidebar(true)}><HiOutlineBars3CenterLeft/></button>

             <Link to='/'> <img className='logo' src={Logo} alt='logo'/></Link>

             <div className="icons-container">
                <Link to='/cart'><button className='cart-btn'><HiOutlineShoppingBag className='icon'/>{totalItems > 0 && <span className='cart-amount'>{totalItems}</span>}</button></Link>

                <button className='icon' onClick={handleClick}><AiOutlineUser/></button>
                {user && showLinks && <UserLinks/>}
                {!user && showLinks && <NonUserLinks/>}
                
            </div>
        </div>

        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </div>
  )
}

export default MobileNavbar