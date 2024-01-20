import React, {useState } from 'react'
import Pagination from './Pagination';
import Ratings from './Ratings';
import Reviews from './Reviews';
import { useDispatch, useSelector } from 'react-redux';


const RatingsReviews = () => {

  const {numberOfPages} = useSelector((store) => store.review)
  const [page, setPage] = useState(1)
  

  return (
    <section className="reviews-section">
        <div className="container">
            <div className="underline"></div>
            <h2 className="heading reviews-heading">Reviews</h2>
            <Ratings></Ratings>
            <div className="underline"></div>
            <Reviews page={page}/>
            {numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} page={page} setPage={setPage} />}
        </div>
    </section>
  )
}


export default RatingsReviews