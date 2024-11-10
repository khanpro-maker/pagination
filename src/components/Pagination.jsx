import React from 'react'
const Pagination = ({pageNo,setPageNo}) => {
    const prevThreeNO = Array.from({length:3},(_,index)=>pageNo-1-index)
    .filter(value=>value>0).reverse()
    const nextFour = Array.from({length:4},(_,index)=>pageNo+index)
    const paginationarr = [...prevThreeNO,...nextFour]
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
           {paginationarr.map((value,index)=>{
            return (<div key={index} className='page-btn'>{value}</div>)
           })}
           <div onClick={handleNext} className='page-btn'>{">"}</div>
        </div>
    </>
  )
}

export default Pagination
