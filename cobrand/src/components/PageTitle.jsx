import React from 'react'
import './pagetitle.css';


const  PageTitle = ({page}) => {
  return (
    <div className='pagetitle'>
      <h1>{page}</h1>
      <nav>
       
        <li className='breadcrumb-item'>
          <a href='/'>
          <i className='bi bi-house-door'>{page}</i>
          </a>
        </li>
       
        
      </nav>


    </div>
  )
}

export default PageTitle