import React from 'react'
import { brands } from '../utils/data'
import BrandItem from './BrandItem'


const Brands = () => {


  return (
    <section className="brands-section">
      <div className="container">
        <h1 className='heading'>Shop Collections</h1>
        <div className="brands-grid">
          {brands.map((item, index) => {
              return <BrandItem key={index} {...item} index={index}/> 
          })}
        </div>
      </div>
    </section>
  )
}

export default Brands