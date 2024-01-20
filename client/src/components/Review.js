import React from 'react'
import { BsStarFill} from 'react-icons/bs'
import {BiPencil, BiTrash} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReview, getSingleReview } from '../features/reviewSlice'



const Review = ({userID, productID, rating, review, name, createdAt}) => {

  {/* <p>{dateFormatter.formatDateToMonthDayYear(createdAt)}</p> */}
  const {user} = useSelector((store) => store.auth)
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(getSingleReview({productID}))
  } 

  const handleDelete = () => {
    dispatch(deleteReview({productID}))
  }

  function formatDateToMonthDayYear(dateString) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

  return (
    <div className="review">
        <div className="name-stars-flex">
            <h3 className='review-name text-sm'>{name}</h3>
            <div className="rating-star-flex">
              <h3 className=''>{rating}.0</h3>
              <span className='star sm-star'><BsStarFill/></span>
            </div>
        </div>
      
        <p className='review-date text-xs'>{formatDateToMonthDayYear(createdAt)}</p>


         {user && user._id === userID &&
            <div className='mobile-review-btns-container'>
              <button className='edit-btn' onClick={handleEdit}><BiPencil/></button>
              <button className='delete-btn' onClick={handleDelete}><BiTrash/></button>`
            </div>
          }
          

        <p className='review-content text-xs'>{review}</p>
    </div>
  )
}

export default Review