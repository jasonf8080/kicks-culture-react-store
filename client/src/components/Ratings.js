import React from 'react'
import RatingsDisplay from './RatingsDisplay';
import OverallRating from './OverallRating';
import LeaveAReview from './LeaveAReview';

const Ratings = () => {
  return (
    <div className="ratings-information-grid">
        <RatingsDisplay title='Ratings'/>
         <OverallRating title='Overall Rating'/>
        <LeaveAReview title='Leave A Review'/>
    </div>

  )
}

export default Ratings