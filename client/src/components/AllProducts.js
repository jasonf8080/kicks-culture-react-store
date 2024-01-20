import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Loader from './Loader'
import EmptyProducts from './EmptyProducts'
import {PiSneaker} from 'react-icons/pi'

const AllProducts = () => {
     const {loading, products} = useSelector((store) => store.filter)

     useEffect(() => {
       const productCards = document.querySelectorAll('.card');

       console.log(productCards);

       const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin around the root
            threshold: 0.5 // Trigger the callback when 50% of the target is visible
        };

       const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
              const card = entry.target;
            
            if (entry.isIntersecting) {
                card.style.opacity = '1'
                observer.unobserve(entry.target);
            } else {
                card.style.opacity = '0'
                
            }
        });
     };

      
        const observer = new IntersectionObserver(intersectionCallback, options);

        
        productCards.forEach(card => {
          observer.observe(card);
        });

     }, [products])



    if(loading){
        return <Loader classProp={'medium-loader'}/>
    }

    if(products.length > 0){
        return (
             <div className="cards-grid-container">
                {products.map((item, index) => {
                    return <Card key={index} {...item}/>
                })}
            </div>
        )
    } else {
        return <EmptyProducts icon={<PiSneaker/>} message='No Products Matched Your Search Criteria'/>
    }
    
}

export default AllProducts