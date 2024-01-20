import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { editCartItem, removeCartItem } from '../features/cartSlice'

const CartItem = ({_id, productID, imageID, title, price, size, amount}) => {
    const dispatch = useDispatch();

    const handleClick = (type) =>  {
       if(type === 'decrease' && amount === 1){
          dispatch(removeCartItem({productID, size}))

       } else {
          dispatch(editCartItem({type, productID, size, amount: 1}))
       }
    } 

    const deleteItem = () => {
        dispatch(removeCartItem({productID, size}))
    }

  return (
    <div className="cart-items-grid">
        <div className="cart-details">
            <div className="cart-img-container">
                <div className="overlay"></div>
                    <img src={`/images/sneaker${imageID}.png`} alt='/'/>
            </div>

            <div className="cart-details-content">
                <p className="text-md cart-title">{title}</p>
                <p className='cart-size'>Size: {size}</p>
                <button className="btn-underline" onClick={deleteItem}>Remove</button>
            </div>
        </div>
                


        <div className="cart-quantity cart-center">
            <div className="quantity-container">
                <button className="quantity-btn" onClick={() => handleClick('decrease')}><AiOutlineMinus/></button>
                <p className='quantity'>{amount}</p>
                <button className="quantity-btn" onClick={() => handleClick('increase')}><AiOutlinePlus/></button>
            </div>
        </div>

        <div className="cart-price cart-center">
            <p className="text-lg">${price}</p>
        </div>

        <div className="cart-total cart-center">
            <p className="text-lg">${price * amount}</p>
        </div>
    </div>
  )
}

export default CartItem