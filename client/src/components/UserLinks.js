import React from 'react'
import { Link } from 'react-router-dom'
import {GoTriangleUp} from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { handleShowLinks, logout } from '../features/authSlice'


const UserLinks = () => {
    const dispatch = useDispatch();


    const handleClick = () => {
      dispatch(handleShowLinks())
    }

    const handleLogout = () => {
        dispatch(logout())
        dispatch(handleShowLinks())
    }

    
  return (
    <div className='links-component-container'>
        <div className="links-component">
            <span><GoTriangleUp/></span>
            <Link to='/editProfile' onClick={handleClick}><p className='text-sm' style={{marginBottom: '10px'}}>Edit Profile</p></Link>
            <p className='logout-text text-sm' onClick={handleLogout}>Logout</p>
        </div>
    </div>
  )
}

export default UserLinks