import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Sizes from './Sizes'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleActionUnauthorized } from '../features/authSlice'
import { checkIfItemAdded } from '../features/cartSlice'
import Loader from './Loader'


const ProductMain = () => {

   const {id} = useParams();

   
  
   const {user} = useSelector((store) => store.auth) 
   const {productLoading, product} = useSelector((store) => store.filter) 
   const {addToCartLoading, sizeMsg, itemAddedMessage} = useSelector((store) => store.cart)
  
   const [size, setSize] = useState(null)
   const [quantity, setQuantity] = useState(1);

   const dispatch = useDispatch();

  const addQuantity = () => {
    if(quantity > 9){
      setQuantity(10)
    } else{
      setQuantity(quantity + 1);
    }
  }

  const decreaseQuantity = () => {
    if(quantity < 2){
      setQuantity(1)
    } else {
      setQuantity(quantity - 1);
    }
  }

  const handleClick = () => {

    if(!user){
      dispatch(handleActionUnauthorized({value: true}));
    } else {
      dispatch(checkIfItemAdded({size, productID: id, amount: quantity}))
    }
  }
  

  if(productLoading){
    return <Loader classProp={'page-loader'}/>

  } else if(product){
      return (
        <section className='main-section single-product-section'>
        <div style={{background: `${product.colors[1]}`}} className="bg-design"></div>

         <div className="mobile-single-product">
               <img src={`../images/sneaker${product.imageID}.png`} alt="/" className="mobile-single-product-img" />
            </div>
        
        <div className="container single-product-flex">
            <img src={`../images/sneaker${product.imageID}.png`} alt="/" className="single-product-img" />
            
            <div className="single-product-content">
              <div className="brand-logo-flex">
                <p className="text-md brand">{product.brand}</p>
                <img src={`../images/${product.brand}-Logo.png`} className='logo-image' alt="/" />
              </div>
              
                
                <h1 className="text-xl">{product.title}</h1>

                <Sizes size={size} setSize={setSize}></Sizes>
                
                <h2 className="text-lg price">${product.price}</h2>

                <div className="add-to-cart-container">
                    <div className="quantity-container">
                        <button className="quantity-btn" onClick={decreaseQuantity}><AiOutlineMinus/></button>
                        <p className='quantity'>{quantity}</p>
                        <button className="quantity-btn" onClick={addQuantity}><AiOutlinePlus/></button>
                    </div>
                
                    <button className='btn-red' onClick={handleClick} disabled={sizeMsg || itemAddedMessage}>
                      {addToCartLoading ? <Loader classProp={'button-loader'}/> : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
  }

 
    

}

export default ProductMain