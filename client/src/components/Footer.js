import React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import {FaTiktok, FaFacebookF, FaInstagram} from 'react-icons/fa'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/css-wrappers/Footer'



const Footer = () => {


  return (
    <>
    <Wrapper>
    <section className="footer">
        <div className="container">
          
                
                 <div className="footer-img-container">
                    <Link to='/' ><img className='footer-logo' src={logo} alt='logo'/></Link>
                </div>
                   

                <div className="">
                    <h3 className="text-lg">Follow Us</h3>

                    <div className="social-icons">
                        <Link to='/'><span><FaFacebookF/></span></Link>
                        <Link to='/'><span><FaTiktok/></span></Link>  
                        <Link to='/'><span><FaInstagram/></span></Link>
                     </div>
                </div>
                
            </div>
        
        
        </section>

       </Wrapper>
     </>
  )
}

export default Footer