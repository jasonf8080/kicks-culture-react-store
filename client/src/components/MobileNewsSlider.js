import React, { useState, useRef, useEffect } from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { handleLinkClick } from '../utils/helpers'
import { articles } from '../utils/data'


const MobileNewsSlider = ({articles, visible}) => {

    const [sliderPosition, setSliderPosition] = useState(0)
    const cardSlider = useRef(null)

    useEffect(() => {
        handleScroll(cardSlider)
    }, [])

    const handleScroll = (value) => {
         if(value){
            value.current.addEventListener('scroll', () => {
                 console.log('runnin')
              const currentScroll = value.current.scrollLeft;
              const maxScroll = value.current.scrollWidth - value.current.clientWidth;

              setSliderPosition((currentScroll / maxScroll) * 100)
            })
        }
    }
  


  return (
    <div className={`${visible ? 'visible' : 'hidden'} mobile-articles`}>

        <div className="articles-mobile-flex" ref={cardSlider}>
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
        </div>


       <div className='mobile-slider-width'>
            <div style={{width: `${sliderPosition}%`}} className='width-el'></div>
       </div>
    

       
            
       
    </div>
  )
}

export default MobileNewsSlider