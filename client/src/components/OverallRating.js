import React from 'react'
import Stars from './Stars'
import {FaFaceGrinBeam, FaFaceMeh, FaFaceFrown, FaFaceMehBlank} from 'react-icons/fa6'
import { useSelector } from 'react-redux'

const OverallRating = ({title}) => {

  const {overallRating, totalReviews, positiveReviews} = useSelector((store) => store.review) 

  return (
    <div>
        <h3>{title}</h3>

        <div className="overall-rating-flex">
            <h1>{overallRating}</h1>

            <div className='overall-rating-info'>
              <div className="stars-face-flex">
                <Stars rating={overallRating !== 'N/A' ? overallRating : 0}/>
                <span className={overallRating >= 4 ? 'face-green'
                    : overallRating >= 2.5 ? 'face-yellow'
                    : overallRating >= 2.5 ? 'face-red' 
                    : 'face-none'
                  }>
                  
                {overallRating >= 4 ? <FaFaceGrinBeam/>
                  : overallRating >= 2.5 ? <FaFaceMeh/>
                  : overallRating >= 0.5 ? <FaFaceFrown/> 
                  : <FaFaceMehBlank/>
                }
                </span>
            </div>
            
              <p className='total-reviews'>{`${totalReviews} Review${totalReviews > 1 ? 's' : ''}`}</p>
            </div>
        </div>

        <p>{positiveReviews} out of {totalReviews}  ({((totalReviews === 0 ? 0 : positiveReviews / totalReviews) * 100).toFixed(0)}%)  reviewers recommend this product</p>
    </div>

  )
}

export default OverallRating