import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/css-wrappers/Products'
import {Filters, Pagination, AllProducts, MobileFilterSection } from '../components'
import { handleLinkClick } from '../utils/helpers'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../features/filterSlice'
import ActiveFilters from '../components/ActiveFilters'
import { getCurrentUser } from '../features/authSlice'




const Products = () => {
    const {title, brand, price, sort, numberOfPages, totalProducts} = useSelector((store) => store.filter)
    const dispatch = useDispatch();


    //Sort
    const [page, setPage] = useState(1)



    const fetchProducts = async() => {
        await dispatch(getAllProducts({title, brand, price, sort, page}));
    }

    useEffect(() => {
        handleLinkClick();
        dispatch(getCurrentUser())
    }, [])

    useEffect(() => {
        window.scrollTo(0,0)
        fetchProducts();
    }, [title, brand, price, sort, page])

    useEffect(() => {
        setPage(1)
    }, [title, brand, price, sort])

    
  return (
    <Wrapper>
   <section className="main-section">
    <div className="container">
        <h1 className="text-2xl heading">All Products</h1>
        
            <>
            <Filters/>
            <MobileFilterSection/>
            <ActiveFilters/>

            <div className="underline"></div>

            <p className='product-count text-md'>{totalProducts} products found</p>

            <AllProducts/>
            
            {numberOfPages > 1 && <Pagination page={page} setPage={setPage} numberOfPages={numberOfPages}/>}   
            </>
   
        </div>
    {/* </div> */}
   </section>
   </Wrapper>
  )
}

export default Products