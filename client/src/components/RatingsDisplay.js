import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const numbersArray = [
    5, 4, 3, 2, 1
]
const RatingsDisplay = ({title}) => {
    const {groupedRatings, totalReviews} = useSelector((store) => store.review);

  return (
    <div>
        <h3>{title}</h3>

        {numbersArray.map((item, index) => {
            
            const getCount = () => { //Returns the count of each star rating
                const hasCount = groupedRatings.find((groupedRatingsItem) => groupedRatingsItem._id === item);
                if(hasCount){
                    return hasCount.count
                } else {
                    return 0
                }
            }


            return (
                <div className='ratings-display-flex'>
                    <p>{item}<span className='star sm-star'><BsStarFill/></span></p>
                    <div className="rating-item">
                        <div className="rating-item-percentage" 
                           style={
                            {width: `${groupedRatings.length < 1 ? 0 : (getCount() / totalReviews * 100).toFixed(2)}%`,
                             borderTopRightRadius: ((getCount() / totalReviews * 100)) === 100 ? '10px' : '0px',
                             borderBottomRightRadius: ((getCount() / totalReviews * 100)) === 100 ? '10px' : '0px'}}></div>
                    </div>
                    <p>{getCount()}</p>
                </div>
            )
        })}

    </div>
  )
}

export default RatingsDisplay