import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { AddBook } from './BookSlice';
const AddBooks = () => {
const NumberOfBook = useSelector(state =>state.BookReducer.book.length)
const navigate = useNavigate();
 const dispatch = useDispatch()
const [title,setTitle]=useState()
const [author,setAuthor]=useState()
const [email,setEmail]=useState()
/* 
const handleSubmit=(e)=>{
   e.preventDefault();
   const book={id:numberOfBooks+1,title,author}
   dispatch(addBook(book))
   navigate('/show-books')
}
*/
const HandleSubmit=(e)=>{
   e.preventDefault()
   const book={id:NumberOfBook+1,title,author,email}
   dispatch(AddBook(book))
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

export default AddBooks;