import React, { useEffect } from 'react'
import Wrapper from '../assets/css-wrappers/About';
import { AboutUs, AboutImages, AboutLocations } from '../components';
import { handleLinkClick } from '../utils/helpers';
import { getCurrentUser } from '../features/authSlice';
import { useDispatch } from 'react-redux';


const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    handleLinkClick();
    dispatch(getCurrentUser())
  }, [])


  return (
    <>
      <Wrapper>
        <AboutUs></AboutUs>
        <AboutImages></AboutImages>
        <AboutLocations></AboutLocations>
      </Wrapper>
    </>
  )
}

export default About