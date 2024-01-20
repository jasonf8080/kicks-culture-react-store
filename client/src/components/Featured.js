import React, { useEffect, useState } from 'react'
import Card from './Card'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import MobileCardSlider from './MobileCardSlider'
import { clearFilters } from '../features/filterSlice'
import { featuredSneakers } from '../utils/data'


const Featured = () => {


    const dispatch = useDispatch();
    
    const [mobileIndex, setMobileIndex] = useState(0);
    const [visible, setVisible] = useState(true);


   
 
 





  return (
   <section className="featured-section">
    <div className="container">
        <h1 className="heading text-2xl">Featured Products</h1>

        <div className="cards-grid-container home-cards">
                {featuredSneakers.map((item, index) => {
                    return <Card key={index} {...item}/>
                })}
        </div>

        <MobileCardSlider products={featuredSneakers} mobileIndex={mobileIndex} setMobileIndex={setMobileIndex} visible={visible} setVisible={setVisible}/>

        <Link to='/products' onClick={() => dispatch(clearFilters())} className="btn-black view-all text-sm">View All Products</Link>


    </div>
   </section>
  )
}

export default Featured