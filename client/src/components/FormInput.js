import React from 'react'
import { useDispatch } from 'react-redux'
import { handleChange } from '../features/authSlice'

const FormInput = ({name, value, type, placeholder}) => {
    const dispatch = useDispatch();
  return (
    <input className='form-input' type={type} name={name}  value={value} onChange={(e) => dispatch(handleChange({name: e.target.name, value:e.target.value}))} placeholder={placeholder}/>
  )
}

export default FormInput