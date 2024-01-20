import React, { useState, useRef, useEffect } from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { handleLinkClick } from '../utils/helpers'
import { articles } from '../utils/data'
import Swipe from './Swipe'


const MobileNewsSlider = ({articles, visible}) => {

    const [sliderPosition, setSliderPosition] = useState(0)
    const cardSlider = useRef(null)
    const [showSwiper, setShowSwiper] = useState(true)

    useEffect(() => {
        handleScroll(cardSlider)
    }, [])

    const handleScroll = (value) => {
         if(value){
            value.current.addEventListener('scroll', () => {
              const currentScroll = value.current.scrollLeft;
              const maxScroll = value.current.scrollWidth - value.current.clientWidth;

              setSliderPosition((currentScroll / maxScroll) * 100)
            })
        }
    }

        useEffect(() => {
  
      const targetElement = document.getElementById('mobile-articles-slider');

      
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 1 // Trigger the callback when 50% of the target is visible
      };

      // Intersection Observer callback function
      const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
           setTimeout(() => {
             setShowSwiper(false)
           }, 4000);
           
          } else {
           
          }
        });
      };

      // Create an Intersection Observer
      const observer = new IntersectionObserver(intersectionCallback, options);

      // Observe the target element
      observer.observe(targetElement);

    }, [])


    const handleSwipeRemove = (targetElID) => {
     const targetElement = document.getElementById('mobile-articles-slider');

      
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 1 // Trigger the callback when 50% of the target is visible
      };

      // Intersection Observer callback function
      const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
           setTimeout(() => {
             setShowSwiper(false)
           }, 4000);
           
          } else {
           
          }
        });
      };

      // Create an Intersection Observer
      const observer = new IntersectionObserver(intersectionCallback, options);

      // Observe the target element
      observer.observe(targetElement);

    }

    
  


  return (
    <div className={`${visible ? 'visible' : 'hidden'} mobile-articles`}>

        <div id='mobile-articles-slider' className="articles-mobile-flex" ref={cardSlider}>
            {articles.map((item, index) => {
                return (
                <Link key={index} to='/' onClick={handleLinkClick}>
                <div className="article-item">
                    <div className="img-container"><img src={`./images/article${item.index}.png`} alt="articleImg" /></div>

                    <div className="article-item-content">
                        <h3 className="text-sm">{item.title}</h3>
                        <p className='text-xs'>{item.content.substring(0, 85).trim().replace(/[\s]+[^\s]*$/, '') + '...'}</p>
                    </div>
                </div>
            </Link>
                )
            })}
            {showSwiper && <Swipe/>}
        </div>


       <div className='mobile-slider-width'>
            <div style={{width: `${sliderPosition}%`}} className='width-el'></div>
       </div>
    

       
            
       
    </div>
  )
}

export default MobileNewsSlider