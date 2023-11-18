import React from 'react'
import './Nav.css'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Navigation() {
  return (
   <nav>
    <div className='nav-container'>
        <input type='text' className='search-input' placeholder='Enter your search shoes'  />

    </div>

    <div className='profile-container'>
        <a href='#'>
            <FavoriteIcon className='nav-icons' />
            
        </a>
        <a href=''>
        <ShoppingCartIcon />
        </a>

        <a href=''>
            <PersonAddAltIcon />
        </a>

    </div>
   </nav>
  )
}

export default Navigation
