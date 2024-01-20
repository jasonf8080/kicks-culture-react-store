import React, { useEffect } from 'react'
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { checkout } from '../features/cartSlice';
import Loader from './Loader';

const PaymentForm = ({loading, setLoading, success, setSuccess, error, setError}) => {
  const dispatch = useDispatch();

  const cardNumber = useState('4242 4242 4242 4242')
  const expires = useState('')
  const cvv = useState('')

  useEffect(() => {
    if(error){
        setTimeout(() => {
            setError('')
        }, 3000)
    }
  }, [error])




   const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    dispatch(checkout({cardNumber, expires, cvv, amount: 1000 }))
            .then((response) => {
                setSuccess(response.payload.message);
            })
            .catch((error) => {
                setError(error.message);
            });

    window.scrollTo(0,0)
    setLoading(false)
   }

  return (
        <>
            <form className="checkout-form">
                
                  <div className="form-group">
                  
                    {error && <p className='error-message'>{error}</p>}
                    
                    <div className="form-group">
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" readOnly={true} id='card-number' className="form-input" placeholder='Card Number' value='4242 4242 4242 4242'/>
                    </div>

                    <div className="form-group-flex">
                        <div className="form-group">
                            <label htmlFor="expires">Expires</label>
                            <input type="text" readOnly={true} id='expires' className="form-input" placeholder='Expires' value='04/24'/>
                        </div>
                        
                       <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" readOnly={true} id='cvv' className="form-input" placeholder='CVV' value='424'/>
                        </div>
                    </div>
                  </div>

                  <button className="btn-black" disabled={loading}  onClick={handleSubmit}>
                    {loading ? <Loader classProp={'button-loader'}/> : 'Submit'}
                  </button>

            </form>
        </>
  )
}

export default PaymentForm