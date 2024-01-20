import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import UserLinks from './UserLinks'
import NonUserLinks from './NonUserLinks'
import { handleShowLinks } from '../features/authSlice'
import { clearAllFilters } from '../features/filterSlice'



const Navbar = () => {
    const dispatch = useDispatch();
    const {totalItems} = useSelector((store) => store.cart)
    const {user, showLinks} = useSelector((store) => store.auth)


  return (
    <nav>
        <div className="nav-container container">
            <div className="nav-links">
                <Link to='/'> <img className='logo' src={Logo} alt='logo'/></Link>

                <ul className="links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/products' onClick={() => dispatch(clearAllFilters())}>Products</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </div>

            
            <div className="icons-container">
                <Link to='/cart'><button className='cart-btn'><HiOutlineShoppingBag className='icon'/>{totalItems > 0 && <span className='cart-amount'>{totalItems}</span>}</button></Link>

                <button className='icon' onClick={() => dispatch(handleShowLinks())}><AiOutlineUser/></button>
                {user && showLinks && <UserLinks/>}
                {!user && showLinks && <NonUserLinks/>}
                
            </div>
           
        
        </div>
    </nav>

  )
}

export default Navbar