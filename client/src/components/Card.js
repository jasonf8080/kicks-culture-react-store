import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({ _id: id, title, imageID, colors, price, brand }) => {
  const handleImageError = (e) => {
    e.target.src = `../images/sneaker${imageID}.png` // Replace with your default image path
  };

  return (
    <Link to={`/product/${id}`}>
      <div className='card'>
        <div className="card-img-container">
          <img
            src={`./images/sneaker${imageID}.png`}
            onError={handleImageError}
            alt="no image"
          />
        </div>

        <div className='card-info'>
          <div>
            <h2 className='title text-md'>{title}</h2>
            <p className='brand text-sm'>{brand}</p>
          </div>

          <p className='price'>$ {price}</p>
        </div>
      </div>
    </Link>
  );
};


export default Card