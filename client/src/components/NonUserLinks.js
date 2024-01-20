import React from 'react'
import { Link } from 'react-router-dom'
import { GoTriangleUp } from 'react-icons/go'
import { handleShowLinks, handleRegistering } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const NonUserLinks = () => {
    
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
     dispatch(handleRegistering({value, prevLocation: window.location.pathname}))
     dispatch(handleShowLinks())
  }

  return (
    <div className='links-component-container'>
        <div className="links-component">
             <span><GoTriangleUp/></span>
            <Link to='/register' onClick={() => handleSubmit('login')}><p style={{marginBottom: '10px'}}>Login</p></Link>
            <Link to='/register' onClick={() => handleSubmit('register')}><p>Register</p></Link>
        </div>
    </div>
  )
}

export default NonUserLinks