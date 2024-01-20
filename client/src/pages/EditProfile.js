import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/css-wrappers/Register'
import { FormInput } from '../components'
import { editUser, getCurrentUser, setupEdit, clearAuthMessage } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'
import {Loader} from '../components'
import { handleLinkClick } from '../utils/helpers'




const EditProfile = () => {
     const {loading, name, lastName, email, authMessage, authClass} = useSelector((store) => store.auth)
     const dispatch = useDispatch()
     const navigate = useNavigate();

     const init = async() => {
        const resultAction = await dispatch(getCurrentUser());
    
           if(getCurrentUser.fulfilled.match(resultAction)) {
               dispatch(setupEdit())
           }  

           if(!getCurrentUser.fulfilled.match(resultAction)){
             navigate('/')
           }
       

     }

     const handleSubmit = () => {
        dispatch(editUser({name, lastName, email}))
     }

     useEffect(() => {
        handleLinkClick();
       init();
      
     }, [])


    useEffect(() => {
        if(authMessage){
        setTimeout(() => {
            dispatch(clearAuthMessage())
        }, 4000)
        }
  }, [authMessage])

        
    return (
      <Wrapper>
        <section className="main-section xsmall-container register-section">
        <h1 className="text-2xl heading">Account Details</h1>

        {authMessage && <p className={authClass}>{authMessage}</p>}

        <form className="register-form">

        
        <FormInput type={'text'} name={'name'} value={name} placeholder={'First Name'} />
  
        <FormInput type={'text'} name={'lastName'} value={lastName} placeholder={'Last Name'} />

        <FormInput type={'email'} name={'email'} value={email} placeholder={'Email'} />
       
        </form>
        
        <button className='btn-black' disabled={loading} onClick={handleSubmit}>
             {loading ? <Loader classProp={'button-loader'}/> :  'Save Changes' }
        </button>

        </section>
      </Wrapper>
    )
}

export default EditProfile