import React from 'react'

const AboutLocations = () => {
  return (
    <section className="main-section about-locations-section">
        <div className="container">
            <h1 className="heading">Store Locations</h1>

            <div className="about-locations-grid">
                <div className="about-locations-item">
                    <h2 className="text-md">Manhattan</h2>
                    <p className='text-sm'>3400 6th Avenue, Manhattan, New York</p>
                    <p className='text-sm'>Hours: Monday-Friday: 10:00AM - 7:00PM</p>
                </div>

                <div className="about-locations-item">
                    <h2 className="text-md">Brooklyn</h2>
                    <p className='text-sm'>8700 5th Avenue, Manhattan, New York</p>
                    <p className='text-sm'>Hours: Monday-Friday: 10:00AM - 7:00PM</p>
                </div>
            </div>
        </div>
        

    </section>
  )
}

export default AboutLocations