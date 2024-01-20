import React from 'react';
import { starsArray } from '../utils/helpers';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';


const Stars = ({ rating }) => {
    return (
        <div className="stars">
            {starsArray.map((item, index) => {
                const floorRating = Math.floor(rating);
                if (item <= floorRating) {
                    return <span className="star" name="rating" key={index}><BsStarFill/></span>;
                } else if (item === floorRating + 1 && rating % 1 !== 0) {
                    return <span className="star" name="rating" key={index}><BsStarHalf/></span>;
                } else {
                    return <span className="star" name="rating" key={index}><BsStar/></span>;
                }
            })}
        </div>
    );
};

export default Stars;