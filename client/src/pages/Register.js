import React, { useEffect } from 'react'
import Wrapper from '../assets/css-wrappers/Register';
import { useDispatch, useSelector } from 'react-redux';
import { Registering, Login, Loader } from '../components'
import { registerUser, loginUser, handleRegistering } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { clearAuthMessage } from '../features/authSlice';
import { handleLinkClick } from '../utils/helpers';




const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isRegistering, prevLocation, loading, authMessage, authClass, name, lastName, email, password} = useSelector((store) => store.auth);
  


  useEffect(() => {
    if(authMessage){
      setTimeout(() => {
        dispatch(clearAuthMessage())
      }, 4000)
    }

  }, [authMessage])

  useEffect(() => {
    handleLinkClick();
  }, [])


  const handleRegister = async () => {
    try {
       const resultAction = await dispatch(registerUser({name, lastName, email, password}));
       if (registerUser.fulfilled.match(resultAction)) {

          setTimeout(() => {
            navigate(`/`);
          }, 3000)
          
      }
    } catch (error) {
      console.log(error)
    }
  };



  const handleLogin = async () => {
    try {
       const resultAction = await dispatch(loginUser({email, password}));
       if (loginUser.fulfilled.match(resultAction)) {

         setTimeout(() => {
            navigate(`${prevLocation}`);
         }, 3000)

      }
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <Wrapper>
    <section className="main-section xsmall-container register-section">
      <h1 className="text-2xl heading">{isRegistering ? 'Register' : 'Login'}</h1>

      {authMessage && <p className={authClass}>{authMessage}</p>}

      {isRegistering ? <Registering/> : <Login/>}

      {isRegistering ? 
      <p>Already have an account? <button className='register-toggle' onClick={() => dispatch(handleRegistering('login'))}>Login</button></p>
        : 
      <p>Don't have an account yet? <button className='register-toggle' onClick={() => dispatch(handleRegistering('register'))}>Register</button></p>
      }
      
      <button className='btn-black' disabled={loading} onClick={isRegistering ? handleRegister : handleLogin}>
        {loading ? <Loader classProp={'button-loader'}/> : isRegistering ? 'Register' : 'Login'}
      </button>
    
    </section>
    </Wrapper>
  )
}

export default Register

