import React from 'react'

const Pagination = ({pageNo,setPageNo}) => {
    function handleNext(){
        setPageNo(pageNo+1)
}
    function handlePrev(){
        setPageNo(pageNo-1)
    }
  return (
    <>
        <div className='pagination-container'>
           {pageNo>1? <div onClick={handlePrev} className='page-btn'>{"<"}</div>:""}
           <div className='page-btn'>{pageNo}</div>
           <div onClick={handleNext} className='page-btn'>{">"}</div>
        </div>
    </>
  )
}

export default Pagination
