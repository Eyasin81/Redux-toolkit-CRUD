import React from 'react';
import {Link} from 'react-router-dom'
import './nav.css'
const Nav = () => {
   return (
      <nav className='nav  fw-bold'>
      <Link to='/' className='nav-link'>Home</Link>
      <Link to='/add-book' className='nav-link'>Add Book</Link>
      <Link to='/views-book' className='nav-link'>Book Views</Link>
      </nav>
   );
};

export default Nav;
/* 
  <Route path='/book-view' element={<BookViews/>}/>
      <Route path='/add-book' element={<AddBooks/>}/>
      <Route path='/edit-book' element={<EditBook/>}/>
      <Route path='/update-book' element={<UpdateBook/>}/>

*/