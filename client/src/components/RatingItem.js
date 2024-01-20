import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const RatingItem = ({number}) => {
   
  return (
    <div className='rating-item'>
        <div className='rating-info'>
            <p className='text-md'>{number}</p>
            <span className='text-md'><BsStarFill/></span>
        </div>

        <div className='full-bar'>
            <div className='percentage-bar'></div>
        </div>
    </div>
  )
}

export default RatingItem