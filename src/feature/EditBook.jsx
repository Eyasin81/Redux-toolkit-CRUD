import React,{useState} from 'react';
import {useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import UpdateBook from './UpdateBook';
const EditBook = () => {
const location = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch()
const [id,setId]=useState(location.state.id)
const [title,setTitle]=useState(location.state.title)
const [author,setAuthor]=useState(location.state.author)
const [email,setEmail]=useState(location.state.email)

const HandleSubmit=(e)=>{
   e.preventDefault()
   dispatch(UpdateBook({id,title,author,email}))
   navigate('/book-view')
}

   return (
      <form onSubmit={HandleSubmit}>

      <div class="mb-3">
      <label htmlFor='title'>Title</label>
      <input 
      type="text" 
      className="form-control" 
      id="email" 
      placeholder="name@example.com" 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />   
</div>
      <div class="mb-3">
      <label htmlFor='email'>Author</label>
      <input 
      type="text" 
      className="form-control" 
      id="Author" 
      placeholder="Enter your author Name" 
      value={author}
      onChange={(e)=>setAuthor(e.target.value)}
      />   
      </div>
      <div class="mb-3">
<label htmlFor='author'>Email</label>
   <input 
   type="email" 
   className="form-control" 
   id="email" placeholder="name@example.com" 
   value={email}
   onChange={(e)=>setEmail(e.target.value)}
   />
</div>

   <button className='btn btn-primary' type="submit">Add Book</button>
      </form>
   );
};

export default EditBook;