import React from 'react'
import MyInput from './ui/input'
import MyButton from './ui/button'
import { useState } from 'react'

export default function PostForm({createPost , onSuccess}){
    const [post , setPost]=useState({title:"", stack:"" , img:{}})
      
      const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e)=>{ 
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                setFiles(response.data)
            })
            .catch((e) => {
            })
    };
  

    const addPost = (e)=>{
        e.preventDefault()
        const newPost={
            ...post,
            id:Date.now(),
            img:files
        }
        createPost(newPost)
        setPost({title:"", body:"" , img:{}})
       
  }
    return(
      <>
        <h3 className="text text-center">Craete your first post</h3>
        <form method="post" onSubmit={onSubmit}>
          <MyInput 
          className="form-control my-2"
          type="text" 
          placeholder="Programming language" 
          value={post.title}
          onChange={e=>setPost({...post , title: e.target.value})}
          />
          <MyInput 
          className="form-control my-2"
          type="text" 
          placeholder="Enter your favorite stack"
          value={post.body}
          onChange={e=>setPost({...post , body: e.target.value})} 
          />
          <MyInput 
          className="form-control my-2"
          type="file"
          onChange={onInputChange}
          multiple
          />
          <MyButton onClick={addPost} className="btn btn-primary w-100">Add post</MyButton>
        </form>
      </>
        
    )
}