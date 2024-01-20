import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { featuredSneakers } from '../utils/data'


const MobileCardSlider = ({heading, products, mobileIndex, setMobileIndex, visible, setVisible}) => {

    const [sliderPosition, setSliderPosition] = useState(0)
    const cardSlider = useRef(null)

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

  return (
    <>
    <h2 className='heading'>{heading}</h2>
    <div className='mobile-card-slider'>


      <div className='cards-slider' ref={cardSlider}>
       {featuredSneakers.map((item, index) => {
            return <Card key={index} {...item}/>
       })}
       </div>

       <div className='mobile-slider-width'>
            <div style={{width: `${sliderPosition}%`}} className='width-el'></div>
       </div>
    
    </div>
     </>
  )
}

export default MobileCardSlider