import React from 'react'
import './Recomanded.css'
import Button from '../../Components/Buttons'


function Recomanded({handleClick}) {
  return (
   <>
  
   <div>
    <h2 className='recommended-title'>Recomanded</h2>

    <div className='recommended-flex btns'>

    <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />

    </div>
   </div>
   </>
  )
}

export default Recomanded
