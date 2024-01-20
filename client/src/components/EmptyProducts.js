import React from 'react'


const EmptyProducts = ({icon, message, button}) => {
  return (
 
    <div className='container empty-section empty-products'>
         <span>{icon}</span>
        <h2 className='text-md'>{message}</h2>
    </div>
  )
}

export default EmptyProducts