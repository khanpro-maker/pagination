import React from 'react'
import Pagination from './Pagination'
import "../index.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Post = () => {
    const  [data,setData]  = useState([]);
    const [pageNo,setPageNo] = useState(3);
    useEffect( ()=>{
         axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
        .then((res)=>setData(res.data))
    },[pageNo])
  return (
    <div className='container'>
      i am post
      <div className='post-container'>
        {data.map((item,index)=>{
          return (<img key={index} src={item.download_url} />)
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}

export default Post
