import React from 'react'
import { changeFilter, clearAllFilters } from '../features/filterSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const BrandItem = ({name, image, index}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(clearAllFilters())
    dispatch(changeFilter({name: 'brand', value: name}))
    navigate('/products')
    
  }

  return (
    <div className='brand-item' onClick={handleClick}>
      <div className="overlay"></div>
      <img src={image} alt='/'/>
      
      <div className="brand-item-text">
        <h4 className='text-lg'>{name}</h4>
        <button className="btn-transparent text-sm">Shop Now</button>
      </div>
    </div>
  )
}

export default BrandItem