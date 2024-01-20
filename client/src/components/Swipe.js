import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbHandFinger } from "react-icons/tb";



const Swipe = () => {
  return (
    <div className="swipe-container">
    <div className='swipe'>
        <span><IoIosArrowRoundBack/></span>
        <p>Swipe</p>
        <span><IoIosArrowRoundForward/></span>

        <span className='finger-swipe'><TbHandFinger/></span>
    </div>
    </div>
  )
}

export default Swipe