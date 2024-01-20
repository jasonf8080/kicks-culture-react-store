import React, {useState, useEffect} from 'react'
import { GoDot, GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { headerData } from '../utils/data';


const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true)
 
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((prevIndex) => prevIndex === headerData.length - 1 ? 0 : prevIndex + 1); 
        setVisible(true);
      }, 600); 
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  
  return (
    
    <section className={`header-section ${visible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <img className={`header-image`} src={`/images/header${headerData.find((item) => activeIndex === item.index).index}.png`} alt="" />
        <div className="overlay"></div>

        <div className='header-text'>
          <p className='text-md'>New Arrivals</p>
          <h2 className='text-5xl'>{headerData.find((item) => activeIndex === item.index).title}</h2>
          <Link to={`/product/${headerData.find((item) => activeIndex === item.index)._id}`}className='btn-transparent text-sm'>Shop Now</Link>
        </div>

        <div className="header-dots">
          {headerData.map((item, index) => {
            return <span className='header-dot text-lg'>
              {activeIndex === index ? <GoDotFill/> :  <GoDot/> }
            </span>
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero