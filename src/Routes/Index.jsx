import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

import AddBooks from '../feature/AddBooks';
import EditBook from '../feature/EditBook';
import UpdateBook from '../feature/UpdateBook';
import BookViews from '../feature/BookViews';

// 
import Error from '../Page/Error';
import Home from '../Page/Home';
import Nav from '../Layout/Nav';

const Index = () => {
   return (
     <BrowserRouter>
     <Nav/>
      <main>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/views-book' element={<BookViews/>}/>
      <Route path='/add-book' element={<AddBooks/>}/>
      <Route path='/edit-book' element={<EditBook/>}/>
      <Route path='/update-book' element={<UpdateBook/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
      </main>
     </BrowserRouter>
   );
};

export default Index;