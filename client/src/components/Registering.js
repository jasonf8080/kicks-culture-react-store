import React from 'react'
import { useSelector } from 'react-redux'
import FormInput from './FormInput';

const Registering = () => {
  const {name, lastName, email, password} = useSelector((store) => store.auth);
 

  return (
    <form className="register-form">
      <FormInput type={'text'} name={'name'} value={name} placeholder={'First Name'} />
      <FormInput type={'text'} name={'lastName'} value={lastName} placeholder={'Last Name'} />
      <FormInput type={'email'} name={'email'} value={email} placeholder={'Email'} />
      <FormInput type={'password'} name={'password'} value={password} placeholder={'Password'} />
      
    </form>
  )
}

export default Registering