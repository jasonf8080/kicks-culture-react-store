import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { clearReviewAlreadyExists, getSingleReview } from '../features/reviewSlice';
import { useParams } from 'react-router-dom';

const ReviewExistsModal = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {reviewAlreadyExistsMessage} = useSelector((store) => store.review);

    const handleClick = () => {
      dispatch(getSingleReview({productID: id}))
      dispatch(clearReviewAlreadyExists())
    }

  return (
    <div className="modal-container">
        <div className="modal review-exists-modal">
            <button className='exit-btn' onClick={() => dispatch(clearReviewAlreadyExists())}><FaTimes/></button>
            <p>{reviewAlreadyExistsMessage}</p>
            <button className='btn-black' onClick={handleClick}>OK</button>
        </div>
    </div>
  )
}

export default ReviewExistsModal