import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/css-wrappers/Cart'


import {Loader, CartItems, EmptyCart} from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartItems } from '../features/cartSlice'
import { getCurrentUser } from '../features/authSlice'
import { handleLinkClick } from '../utils/helpers'

const Cart = () => {

    const dispatch = useDispatch();
    const {cartItems} = useSelector((store) => store.cart)
    const [loading, setLoading] = useState(false)

    const init = async() => {
        setLoading(true)
        await dispatch(getAllCartItems());
        setLoading(false)
    }

    useEffect(() => {
        handleLinkClick();
        dispatch(getCurrentUser())
        init();
    }, [])

    if(loading){
        return <Loader classProp={'page-loader'}/>
    }


    if(cartItems.length > 0){
        return <Wrapper><CartItems/></Wrapper>
    } else {
        return <EmptyCart/>
    }
}

export default Cart