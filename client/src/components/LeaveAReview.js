import React from 'react'
import { starsArray } from '../utils/helpers'
import {BsStar} from 'react-icons/bs'
import {useDispatch, useSelector} from 'react-redux'
import {handleUserRating, handleUserRatingModal} from '../features/reviewSlice'


const LeaveAReview = ({title}) => {

  const dispatch = useDispatch();
  const {userRating} = useSelector((store) => store.review)

  const handleClick = (item) => {
    dispatch(handleUserRating(item));
    dispatch(handleUserRatingModal({value: true}))
  }
  
   return (
    <div className='leave-a-review-section'>
      <h3>{title}</h3>

      <div className="leave-a-review-container">

        <div className="leave-a-rating">
          {starsArray.map((item) => {
            return <div className={`${userRating >= item && 'active'} rating-button`} onClick={() => handleClick(item)}><BsStar/></div>
          })}
        </div>

        <p>Review this product to help others when purchasing</p>
      </div>

    </div>
  )
}

export default LeaveAReview