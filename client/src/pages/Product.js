import React, { useEffect } from 'react'
import ProductWrapper from '../assets/css-wrappers/Product';
import UserRatingModalWrapper from '../assets/css-wrappers/UserRatingModal';
import { useParams } from 'react-router-dom';
import { ItemAddedAlert, UserRatingModal, AuthModal, ProductMain, RatingsReviews, ReviewActionAlert, ReviewExistsModal, RelatedProducts } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, handleActionUnauthorized } from '../features/authSlice';
import { getSingleProduct } from '../features/filterSlice';
import { handleLinkClick } from '../utils/helpers';




const Product = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {itemAddedMessage} = useSelector((store) => store.cart)
    const {showUserRatingModal, reviewActionMessage, reviewAlreadyExistsMessage} = useSelector((store) => store.review)
    const {actionUnauthorized} = useSelector((store) => store.auth)
  
   useEffect(() => {
    handleLinkClick();
    dispatch(handleActionUnauthorized({value: false}))
    dispatch(getCurrentUser());
   }, [])

   useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getSingleProduct({id}))
   }, [id])

    useEffect(() => {
        const modalContainer = document.querySelector(".modal-container");
        const modal = document.querySelector(".modal");

        if(showUserRatingModal){

        modal.addEventListener("mouseenter", () => {
            modalContainer.style.overflow = "auto"; // Enable scrolling on the modal
        
        });

        modal.addEventListener("mouseleave", () => {
            modalContainer.style.overflow = "hidden"; // Disable scrolling on the modal
        
        });


        modal.addEventListener("mouseenter", () => {
            document.body.style.overflow = "hidden"; // Disable scrolling on the body
        
        });

        modal.addEventListener("mouseleave", () => {
            document.body.style.overflow = "auto"; // Enable scrolling on the body
        
        });
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling on the body
        }
        
    }, [])





  return (
    <ProductWrapper>
    <div className="single-product-section">

        {itemAddedMessage && <ItemAddedAlert/>}
        {reviewActionMessage && <ReviewActionAlert/>}
        {showUserRatingModal && !actionUnauthorized && <UserRatingModalWrapper><UserRatingModal/></UserRatingModalWrapper>}
        {actionUnauthorized && <AuthModal/>}
        {reviewAlreadyExistsMessage && <ReviewExistsModal/>} 


        <ProductMain/> 
        <RelatedProducts/>
        <RatingsReviews/>
      
  
    </div>
    </ProductWrapper>
  )
}

export default Product