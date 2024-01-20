import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { featuredSneakers } from '../utils/data'
import Swipe from './Swipe'


const MobileCardSlider = ({heading, products, mobileIndex, setMobileIndex, visible, setVisible}) => {

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
              setShowSwiper(false)

              setSliderPosition((currentScroll / maxScroll) * 100)
            })
        }
    }

    useEffect(() => {
  
      const targetElement = document.getElementById('mobile-featured-slider');

      
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

  return (
    <>
    <h2 className='heading'>{heading}</h2>
    <div id='mobile-featured-slider' className='mobile-card-slider'>
      <div className='cards-slider' ref={cardSlider}>
       {featuredSneakers.map((item, index) => {
            return <Card key={index} {...item}/>
       })}
      {showSwiper && <Swipe/>}
       </div>

       

       <div className='mobile-slider-width'>
            <div style={{width: `${sliderPosition}%`}} className='width-el'></div>
       </div>
    
    </div>
     </>
  )
}

export default MobileCardSlider