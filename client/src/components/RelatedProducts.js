import React, {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import MobileCardSlider from './MobileCardSlider';
import Loader from './Loader';

const RelatedProducts = () => {
    const {relatedProducts, productLoading} = useSelector((store) => store.filter);
    const [visible, setVisible] = useState(true);

    const [sliderPosition, setSliderPosition] = useState(0)
    const relatedSlider = useRef(null)


    useEffect(() => {
        handleScroll(relatedSlider)
    }, [relatedProducts])


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

      <div className='cards-slider' ref={relatedSlider}>
        {relatedProducts.map((item, index) => {
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

export default RelatedProducts