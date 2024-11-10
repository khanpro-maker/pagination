import React from 'react'
import Pagination from './Pagination'
import "../index.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Post = () => {
    const  [data,setData]  = useState([]);
    useEffect( ()=>{
         axios.get(`https://picsum.photos/v2/list?page=1&limit=5`)
        .then((res)=>setData(res.data))
    },[])
  return (
    <div className='container'>
      i am post
      <div className='post-container'>
        {data.map((item,index)=>{
          return (<img src={item.download_url} />)
        })}
      </div>
      <Pagination/>
    </div>
  )
}

export default Post
