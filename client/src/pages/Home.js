import React, { useEffect } from 'react'
import { Hero, Featured, Brands, Blog, Locations} from '../components'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../features/authSlice';
import Wrapper from '../assets/css-wrappers/Home';
import { handleLinkClick } from '../utils/helpers';


const Home = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
      handleLinkClick();
     dispatch(getCurrentUser())
  }, [])

      

//THERE WILL BE A MOBILE FEATURED WHERE THERE ARE 6 ITEMS, ARROWS FOR THE SLIDER

  return (
    <>
        <Wrapper>
          <Hero></Hero>
          <Brands></Brands>
          <Featured></Featured>

          
          <Blog></Blog>
          <Locations></Locations>
        </Wrapper>
    </>
  )
}

export default Home