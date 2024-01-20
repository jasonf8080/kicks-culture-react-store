import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {BsTrash3} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeCartItem, editCartItem } from '../features/cartSlice'


const MobileCartItem = ({_id, productID, imageID, title, price, size, amount}) => {
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
    <div className='mobile-cart-item'>
        <div className="cart-img-container">
            <div className="overlay"></div>
            <img src={`/images/sneaker${imageID}.png`}/>
        </div>

        <div className='mobile-cart-content'>
            <div className="mobile-cart-flex">
                <p className="text-sm cart-title">{title}</p>
                <button className="btn-underline" onClick={deleteItem}><BsTrash3/></button>
            </div>

            <p className='text-xs'>Size: {size}</p>

            <div className="mobile-cart-flex">
                <div className="cart-quantity cart-center">
                    <div className="quantity-container">
                        <button className="quantity-btn" onClick={() => handleClick('decrease')}><AiOutlineMinus/></button>
                        <p className='quantity'>{amount}</p>
                        <button className="quantity-btn" onClick={() => handleClick('increase')}><AiOutlinePlus/></button>
                    </div>
                </div>

                  <p className='text-sm'>${price * amount}</p>
            </div>


        </div>
    </div>
  )
}

export default MobileCartItem