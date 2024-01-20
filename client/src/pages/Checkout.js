import React, { useEffect, useState } from 'react';
import Wrapper from '../assets/css-wrappers/Checkout';
import { useSelector, useDispatch } from 'react-redux';
import { handleLinkClick } from '../utils/helpers';
import { getCurrentUser } from '../features/authSlice';
import { Loader, PaymentForm, PaymentSuccess } from '../components';

import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';




const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {cartItems, totalItems, totalPrice} = useSelector((store) => store.cart)
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const init = async() => {
    setLoading(true)
    setSuccess(false)
    handleLinkClick()
    await dispatch(getCurrentUser())
    setLoading(false)
  }

   useEffect(() => {
    init();
   }, [])





   if(loading){
    return <Loader classProp={'page-loader'}/>
   }

   if(cartItems.length < 1 && !success){
    return navigate('/')
   }

   if(success){
    return <PaymentSuccess success={success}/>
   }


return (
  <Wrapper>
      
  <div className="checkout-section">
      <div className="container">

        <div>
           <h2 className='heading'>Checkout</h2>

          {cartItems.length > 0 && 
          <div className="checkout-items">
          <div className="underline"></div>

          {cartItems.map((item, index) => {
              return (
              <div className="checkout-item" key={index}>
                    <div className='checkout-img-quantity'>
                      <div className="overlay"></div>
                      <img src={`/images/sneaker${item.imageID}.png`}/>
                      <span>{item.amount}</span>
                    </div>

                    <div className="checkout-item-content">
                      <h3 className="text-sm">{item.title}</h3>
                         
                       <div className="checkout-size-price-flex">
                          <p className='text-sm'>Size: {item.size}</p>
                          <p className='text-sm'>${item.price * item.amount}</p>

                       </div>
                    </div>
              </div>
              )
           })}
          </div>
          }

            
          </div>
             

           <div>
              <h2 className="heading">Payment Details</h2>
          
                 <PaymentForm 
                  loading={loading}
                  setLoading={setLoading}
                  success={success}
                  setSuccess={setSuccess}
                  error={error}
                  setError={setError}
                 />


              <div className='checkout-total-container'>
              <p className='text-sm'>Items: {totalItems}</p>
              <h3 className='text-lg'>Total: ${totalPrice}</h3>
            </div>
          </div>
      </div>
  </div>

  </Wrapper>
);
};

export default Checkout;