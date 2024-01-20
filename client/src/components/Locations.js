import React from 'react'
import manhattan from '../assets/images/manhattan.png'
import brooklyn from '../assets/images/brooklyn.png'

const Locations = () => {
  return (
    <section className="main-section locations-section">
        <div className="container">
            <h1 className="heading">Store Locations</h1>

            <div className="locations-grid">
                <div className="location-item">
                    <div className="overlay"></div>

                    <img src={manhattan} alt='locationImg'/>

                    <div className="location-content">
                        <h1 className="text-md">Manhattan</h1>
                        <p className="text-sm">3400 6th Avenue, Manhattan, New York</p>
                    </div>
                </div>

                <div className="location-item">
                    <div className="overlay"></div>

                    <img src={brooklyn} alt='locationImg'/>

                    <div className="location-content">
                        <h1 className="text-md">Brooklyn</h1>
                        <p className="text-sm">8700 5th Avenue, Manhattan, New York</p>
                    </div>
                </div>
            </div>

            <div className="white-line"></div>

         </div>
    </section>
  )
}

export default Locations