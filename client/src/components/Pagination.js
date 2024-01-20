import React from 'react'


const Pagination = ({numberOfPages, setPage, page}) => {


  const pages = Array.from({length: numberOfPages}, (_, index) => {
    return index + 1
  });

  return (
    <div className='pagination'>
        {pages.map((item, index) => {
            return <button className={`${page === item ? 'active pagination-btn' : 'pagination-btn'}`} onClick={() => setPage(item)}>
              {item}
            </button>
        })}
    </div>
  )
}

export default Pagination