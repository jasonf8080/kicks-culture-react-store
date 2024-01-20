import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllReviews } from '../features/reviewSlice';
import Loader from './Loader';
import Review from './Review';
import EmptyProducts from './EmptyProducts';
import { BiPencil } from 'react-icons/bi';


const Reviews = ({page}) => {
     const dispatch = useDispatch();
     const {id} = useParams();
     const {loading, reviews} = useSelector((store) => store.review);
     
        
    //Presets 
  
    useEffect(() => {
        dispatch(getAllReviews({id, page}))
    }, [id, page])


    if(loading){
        return <Loader classProp='medium-loader'/>
    }

    if(reviews.length > 0){
        return (
        <div className="reviews-container">
            {reviews.map((item, index) => {
                    return <Review key={index} {...item}/>
            })}
        </div>
        )
    } else {
        return <EmptyProducts message='This Product Has Not Been Reviewed Yet'/>
    }

   
}

export default Reviews