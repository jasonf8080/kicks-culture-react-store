import React from 'react'
import { useSelector } from 'react-redux'
import FormInput from './FormInput'



const Login = () => {
  const {email, password} = useSelector((store) => store.auth)

  return (
    <form className="register-form">
      <FormInput type={'email'} name={'email'} value={email} placeholder={'Email'} />
      <FormInput type={'password'} name={'password'} value={password} placeholder={'Password'} />
    </form>
  )
}

export default Login