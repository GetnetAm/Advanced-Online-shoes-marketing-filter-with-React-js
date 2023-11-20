import React from 'react'
import './Catagory.css'

function Catagory() {
  return (
    <div>
     <h2 className='sidebar-title'>Category</h2>


     <div>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>All

      </label>


      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>Sneakers

      </label>

      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>flates

      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>Snadels

      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>Heals

      </label>
  
     </div>
    </div>
  )
}

export default Catagory
