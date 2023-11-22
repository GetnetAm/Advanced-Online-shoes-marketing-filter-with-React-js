import React from 'react'
import './Sidebar.css'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Catagory from './catagory/Catagory';
import Price  from "./Price/Price"
import Colors from "./colors/Colors"


function Sidebar({handleChange}) {
  
  return (
    <section className='sidebar'>
        <div className='logo-container'>
            <h1><ShoppingCartCheckoutIcon variant="contained" color="secondary" /> </h1>

        </div>

        <Catagory  handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
        

    </section>
  )
}

export default Sidebar
