import React from 'react'
import Review from './Review';

const AllReviews = () => {
    const {reviews} = useSelector((store) => store.review);
  return (
    <div className="reviews-container">
            {reviews.length > 0 ? 
                reviews.map((item, index) => {
                    return <Review key={index} {...item}/>
                }) : 
            <h1>No Reviews Posted</h1>
            }
    </div>
  )
}

export default AllReviews