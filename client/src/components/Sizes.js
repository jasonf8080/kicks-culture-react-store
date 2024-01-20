import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSizeMsg } from '../features/cartSlice'
import { sizes } from '../utils/data'


const Sizes = ({size, setSize}) => {

    const [activeIndex, setActiveIndex] = useState(null)
    const {sizeMsg} = useSelector((store) => store.cart) 
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            if(sizeMsg){
                dispatch(clearSizeMsg());
            }
        }, 3000)
        
    }, [sizeMsg])

    return (
        <div>
            <p className="text-sm size-heading">Size: <span>{size ? size : sizeMsg ? sizeMsg : ''}</span></p>
            <div className="sizes-grid">
                {sizes.map((item, index) => {
                    return <button className={`${activeIndex === index ? 'active pagination-btn' : 'pagination-btn'}`} onClick={() => {
                        setActiveIndex(index)
                        setSize(item)
                    }}>{item}</button>
                })}
            </div>
        </div>
    )
}

export default Sizes