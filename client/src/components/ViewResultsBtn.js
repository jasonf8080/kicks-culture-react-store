import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'

const ViewResultsBtn = ({setShowFilterComponent}) => {
    const dispatch = useDispatch()
    const {loading, totalProducts} = useSelector((store) => store.filter) 
  return (
    <div className="view-results" onClick={() => setShowFilterComponent(null)}>
            <button className='btn-black' disabled={loading}>
              {loading ? <Loader classProp={'button-loader'}/>
              :
              `View Results (${totalProducts})`
              }
            </button>
        </div>
  )
}

export default ViewResultsBtn