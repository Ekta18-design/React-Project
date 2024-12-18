import React from 'react';
import './header.css';
import Logoimage from './Logoimage';




 function Header() {
  return (
    <header id="header" className='header fixed-top d-flex align-items-center'>
     
    <Logoimage></Logoimage>
    </header>
    
  );
}
export default Header;