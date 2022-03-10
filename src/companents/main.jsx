import React from 'react'
import './css/style.css'
import { useState } from 'react'
import TableList from './TableList'
import PostForm from './postForm'
import FilterSort from './filterSort'
import MyModal from './ui/modal'
import MyButton from './ui/button'
import { usePosts } from './hooks/useCreatePosts'
import { useEffect } from 'react'
import PostServisApi from './ui/API/postApi'
import MyLoader from './ui/loader'
import {useFetching} from './hooks/useFetching'
import { getPageArr, getPageCount } from './util/page'


function MainPage() {
  const [posts , setPosts]=useState([])
  const [filter , setFilter]=useState({sort:"", query:""})
  const [modal , setModal]=useState(false)
  const SortedAndSearchPosts = usePosts(posts ,filter.sort ,filter.query)
  const [totalPage , setTotalPage]=useState(0)
  const [limit , setLimit]=useState(10)
  const [page ,setPage]=useState(1)

  const pageArr =getPageArr(totalPage)
  const [fetchPosts, isLoading ,postError]= useFetching( async ()=>{
    const response = await PostServisApi.getAllPosts(limit , page)
    setPosts(response.data)
    const totalCount =response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount , limit))
  })
  const ChangePage= (page)=>{
    setPage(page)
  }

  
  useEffect(()=>{
    fetchPosts()
  }, [page])
  const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };
 

  const createPost=(newPost)=>{
    setPosts([...posts,newPost]) 
    setModal(false)}
  const removePost=(post)=>{setPosts(posts.filter(s=> s.id!==post.id))}
  return (
    <div className="app mx-auto">
      <MyButton
        onClick={()=>setModal(true)}
        className="btn btn-primary"
      >Add post</MyButton>
      <MyModal modal={modal} setModal={setModal}>
        <PostForm createPost={createPost} onSuccess={onSuccess}/>
      </MyModal>
      <FilterSort filter={filter} setFilter={setFilter}/>
     
      {isLoading
      ?<div className='d-flex justify-content-center'><MyLoader/> </div>
      :<TableList remov={removePost} files={files} posts={SortedAndSearchPosts}/>
       }
       {pageArr.map(item =>(
         <MyButton 
         onClick={()=> ChangePage(item)}
         key={item} 
         className={page===item ? "btn btn-primary" : "btn btn-outline-primary"}>{item}</MyButton>
       ))}
      
    </div>
  )
    
  
}

export default MainPage
