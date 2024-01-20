import React, { useEffect, useState } from 'react'
import { starsArray } from '../utils/helpers'
import { BsStar } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { createReview, editReview, handleUserRating, handleUserRatingModal, handleUserReview, clearErrorMessages } from '../features/reviewSlice'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'
import { handleActionUnauthorized } from '../features/authSlice'
import {LiaTimesSolid} from 'react-icons/lia'

const UserRatingModal = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({});
    const {userRating, userReview, isEditing, reviewActionLoading, ratingError, reviewError} = useSelector((store) => store.review);
    const {user} = useSelector((store) => store.auth);


    const fetchProduct = async() => {
        try {
            setLoading(true)
           const {data} = await axios.get(`/api/v1/products/getSingleProduct/${id}`);
           console.log(data)
            setProduct(data.product)
            setLoading(false)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])


    //Clear Error Messages
    useEffect(() => {
       if(ratingError || reviewError){
            setTimeout(() => {
                dispatch(clearErrorMessages())
            }, 3000)
       }

    }, [ratingError, reviewError])

    const handleClick = (item) => {
      dispatch(handleUserRating(item));
    }

    const handleSubmit = () => {
        if(!user){
            dispatch(handleActionUnauthorized({value: true}))
        } else {
            if(isEditing){
                dispatch(editReview({productID: id, rating: userRating, review: userReview}))
            } else {
                dispatch(createReview({productID: id, rating: userRating, review: userReview}))
            }
        }
       
    }


  return (
   <div className='modal-container'>
        <div className="modal">
            <div className="modal-top">
                <div className="modal-top-container">
                    <h3>{isEditing ? 'Edit Review' : 'Create Review'}</h3>
                    <button className="exit-btn" onClick={() => dispatch(handleUserRatingModal({value: false}))}><LiaTimesSolid/></button>
                </div>
            </div>

            <div className="user-rating-modal-content">
                <div className='user-rating-image-title'>
                    {loading ? <Loader classProp='small-loader'/> : <img src={`../images/sneaker${product.imageID}.png`} alt='/' />}
                    <h2>{loading ? 'Loading...' : product.title}</h2>
                </div>

            <div className="user-rating-item">
                {ratingError && <p className='error-message'>{ratingError}</p>}
                 <div className="leave-a-rating">
                    {starsArray.map((item) => {
                    return <div className={`${userRating >= item && 'active'} rating-button`} onClick={() => handleClick(item)}><BsStar/></div>
                    })}
                 </div>
            </div>
           

                <div className="user-rating-item">
                    {reviewError && <p className='error-message'>{reviewError}</p>}
                    <textarea name="review" value={userReview} placeholder='Leave your review here...' onChange={(e) => dispatch(handleUserReview(e.target.value))} className='review-input'></textarea>
                </div>

                <button className="btn-black" onClick={handleSubmit}>{reviewActionLoading ? <Loader classProp='button-loader'/> : 'Submit'}</button>
                
                
            </div>

           
            
        </div>
    </div>
  )
}

export default UserRatingModal