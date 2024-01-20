import React from 'react'
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'
import about3 from '../assets/images/about3.png'

const AboutImages = () => {
  return (
    <section className="about-images-section">
       <div className="small-container">
        <div className="white-line"></div>

        <div className="about-images-grid">
            <img src={about1} alt='aboutImage'/>
            <img src={about2} alt='aboutImage'/>
            <img src={about3} alt='aboutImage'/>
        </div>

         <div className="white-line"></div>
       </div>
    </section>
  )
}

export default AboutImages