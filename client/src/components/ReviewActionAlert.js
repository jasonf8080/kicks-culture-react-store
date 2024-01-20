import React, { useEffect } from 'react'
import Wrapper from '../assets/css-wrappers/Alert';
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { clearReviewActionMessage } from '../features/reviewSlice';


const ReviewActionModal = () => {
  const dispatch = useDispatch();
  const {reviewActionMessage, reviewActionClass} = useSelector((store) => store.review)

  useEffect(() => {

    if(reviewActionMessage){
      setTimeout(() => {
        dispatch(clearReviewActionMessage())
      }, 5000)
   }

  }, [reviewActionMessage])

  return (
    <Wrapper>
    <div className={`${reviewActionClass} review-action-alert`}>
        <div className='alert-top'>
            <p></p>
            <span onClick={() => dispatch(clearReviewActionMessage())}><FaTimes/></span>
        </div>

        <div className="alert-timer"></div>

        <div className="review-action-alert-container">
            <p>{reviewActionMessage}</p>
        </div>
      
    </div>
    </Wrapper>
  )
}

export default ReviewActionModal