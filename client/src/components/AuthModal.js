import React from 'react'
import {FaRegTimesCircle, FaTimes} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleActionUnauthorized, handleRegistering } from '../features/authSlice'
import { handleUserRatingModal } from '../features/reviewSlice'


const AuthModal = () => {
    const dispatch = useDispatch();

    
    const handleExit = () => {
        dispatch(handleActionUnauthorized({value: false}))
        dispatch(handleUserRatingModal({value: false}))
    }

    const handleClick = () => {
       dispatch(handleUserRatingModal({value: false}))
       dispatch(handleActionUnauthorized({value: false}))
       dispatch(handleRegistering({value: 'login', prevLocation: window.location.pathname}))
    }

  return (
    <div className="modal-container">
        <div className="modal auth-modal">
            <button className='exit-btn' onClick={handleExit}><FaTimes/></button>
            
            
                <div className='auth-modal-icon'><FaRegTimesCircle/></div>
                <p className='text-sm'>You need to be logged in to perform this action</p>
                <Link to='/register' ><button className="btn-black" onClick={handleClick}>Sign In</button></Link>
       

        </div>
    </div>
  )
}

export default AuthModal