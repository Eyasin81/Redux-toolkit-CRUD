import { createSlice } from "@reduxjs/toolkit"

const initialBook={
   book:[{
      id:1,
      title:"Arduino Book",
      author:"John Smith",
      email:"johnsmith@gmail.com"
   }]
}

export const bookSlice=createSlice({
   name:"book",
   initialState:initialBook,
   reducers:{
      ShowBook:(state)=>state,
      AddBook:(state,action)=>{
         state.book.push(action.payload)
      },
      DeleteBook:(state,action)=>{
         const id=action.payload
         state.book=state.book.filter(book=>book.id!==id)
      },
      UpdateBook:(state,action)=>{
         const {id,title,author}=action.payload
         const bookToUpdate=state.book.find((book)=>book.id===id)
         if(bookToUpdate){
        bookToUpdate.title = title;
        bookToUpdate.author = author;
         }
   },
}

})
export  const {ShowBook,AddBook,DeleteBook,UpdateBook}=bookSlice.actions
export default bookSlice.reducer
