import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { FaTimes } from 'react-icons/fa'
import { clearItemAddedMessage } from '../features/cartSlice'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/css-wrappers/Alert'

const ItemAddedModal = () => {
    const dispatch = useDispatch();
    const {itemAddedMessage, itemAddedClass} = useSelector((store) => store.cart)
    
    useEffect(() => {
        if(itemAddedMessage){
            const timeout = setTimeout(() => {
                dispatch(clearItemAddedMessage())
            }, 5000)

             return () => clearTimeout(timeout);
        }

    }, [itemAddedMessage])
   
  return (
   
    <Wrapper>
    <div className={`${itemAddedClass} review-action-alert`}>
        <div className='alert-top'>
            <p></p>
            <span onClick={() => dispatch(clearItemAddedMessage())}><FaTimes/></span>
        </div>

        <div className="alert-timer"></div>

        <div className="review-action-alert-container">
            <p>{itemAddedMessage}</p>
        </div>
      
    </div>
    </Wrapper>
  )
}

export default ItemAddedModal