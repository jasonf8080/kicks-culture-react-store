import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
  return (
    <div className='modal-container'>
        <div className="modal">
            <button className="exit-btn"><FaTimes/></button>
        </div>
    </div>
  )
}

export default Modal