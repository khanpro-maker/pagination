import React from 'react'

const Pagination = ({pageNo,setPageNo}) => {
  return (
    <>
        <div className='pagination-container'>
           <div className='page-btn'>{"<"}</div>
           <div className='page-btn'>{pageNo}</div>
           <div className='page-btn'>{">"}</div>
        </div>
    </>
  )
}

export default Pagination
