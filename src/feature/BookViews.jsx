import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { DeleteBook } from './BookSlice';
import {Link} from 'react-router-dom'
// console.log(state)
const BookViews = () => {
// const book = useSelector(state =>console.log(state))
const Book = useSelector(state =>state.BookReducer.book)
const dispatch = useDispatch()

// Delete book 
const handleDelete=(id)=>{
   dispatch(DeleteBook(id))
 
}

   return (
      <div>
         <table className='table'>
         <thead>
        <tr>
        <th scope="col">Sl</th>
        <th scope="col">Title</th>
        <th scope="col">Email</th>
        <th scope="col">Author</th>
        <th scope="col">Action</th>
        </tr>
         </thead>
         <tbody>
         {
            Book&&Book.map((book)=>{
               const {id,title,author,email}=book
               return(
                  <tr key={id}>
                     <td  scope="row">{id}</td>
                     <td  scope="row">{title}</td>
                     <td  scope="row">{author}</td>
                     <td  scope="row">{email}</td>
                     <td  scope="row">
                   <Link to='/edit-book' state={{id,title,author,email}}>
                   <button className='btn btn-primary mx-2'>Edit</button>
                   </Link>
                    <button 
                    className='btn btn-danger mx-2'
                    onClick={()=>handleDelete(id)}
                    >Delete</button>
                     </td>
                  </tr>
               )
            })
         }
         </tbody>
         </table>
      </div>
   );
};

export default BookViews;