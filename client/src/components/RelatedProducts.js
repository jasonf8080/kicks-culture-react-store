import React, {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import MobileCardSlider from './MobileCardSlider';
import Loader from './Loader';
import Swipe from './Swipe';
import { useParams } from 'react-router-dom';

const RelatedProducts = () => {
    const {relatedProducts, productLoading} = useSelector((store) => store.filter);
    const [sliderPosition, setSliderPosition] = useState(0)
    const relatedSlider = useRef(null)
    const [showSwiper, setShowSwiper] = useState(true)
    const {id} = useParams();


    useEffect(() => {
        handleScroll(relatedSlider)
    }, [relatedProducts])

    useEffect(() => {
      setSliderPosition(0)
      setShowSwiper(true)
    }, [id])


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
  
      const targetElement = document.getElementById('related-products-slider');

      
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

    }, [relatedProducts])


    if(productLoading){
      return <Loader classProp={'medium-loader'}/>
    }

  return (
    <>
    <div className='container related-products'>
        <div className="underline"></div>
         <h1 className="heading">Related Products</h1>
        {relatedProducts.length > 0 && 
            <div className="cards-grid-container">
            {relatedProducts.map((item, index) => {
                 return <Card key={index} {...item}/>
            })}
            </div>
        }
    </div>


      

    <div className="container mobile-related-products">
        <div className="underline"></div>
         <h1 className="heading" style={{marginTop: '30px'}}>Related Products</h1>


      <div id='related-products-slider' className='cards-slider' ref={relatedSlider}>
        {relatedProducts.map((item, index) => {
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

export default RelatedProducts