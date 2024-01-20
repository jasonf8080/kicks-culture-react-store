import React from 'react'
import { CartItem } from '../components'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllCartItems } from '../features/cartSlice'
import MobileCartItem from './MobileCartItem'


const CartItems = () => {
  const dispatch = useDispatch();
  const {cartItems, totalItems, totalPrice} = useSelector((store) => store.cart);

    const handleClearCart = () => {
        dispatch(removeAllCartItems())
    }

  return (
    <section className="main-section cart-section">
        <div className="container">

            
            <div className="cart-header-grid">
                <p className="text-md">Cart Details</p>
                <p className="text-md cart-center">Amount</p>
                <p className="text-md cart-center">Price</p>
                <p className="text-md cart-center">Total</p>
                <div className="white-line"></div>
            </div>
            
            <div className="cart-items">
                {cartItems.map((item, index) => {
                     return <CartItem key={index} {...item}/>
                })}
            </div>
            
            <div className="mobile-cart">
                <h2 className='text-lg heading mobile-cart-heading'>Cart Details</h2>
                <div className="white-line"></div>
                
        
                <div className="mobile-cart-items" style={{marginBottom: '50px'}} >
                    {cartItems.map((item, index) => {
                        return <MobileCartItem key={index} {...item}/>
                    })}
                </div>
            </div>

           

            <div className="cart-btns-container">
                <Link to='/products' className='btn-link'>
                    <span><BsChevronLeft/></span>
                    <p>Continue Shopping</p>
                </Link>

                <button className="btn-red" onClick={handleClearCart}>Clear Cart</button>
            </div>
    
         
            <div className="cart-total-container">
                <h2 className="text-xl">Order Summary</h2>
                <p className="text-lg">Items: <span className='items'>{totalItems}</span></p>
                <h3 className="text-lg">Total Cost: <span className='subtotal'>${totalPrice}</span></h3>
             

                <div className="btn-transparent-container">
                    <Link to='/checkout' className="btn-link">
                        <p>Proceed to Checkout</p>
                        <span><BsChevronRight/></span>
                    </Link>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default CartItems