import React from 'react'
import './Colors.css'
import Input from '../../../Components/Input'

function Colors({handleChange}) {
  return (
    <div>
       <h2 className="sidebar-title color-title">Colors</h2>
       <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="" />
        <span className="checkmark all"></span>All

      </label>

      <Input 
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test1" 
      color="black"
      />
      <Input 
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test1"
      color="blue" 
      />
        <span className='checkmark' style={{background:"blue"}}></span>
      
      <Input 
      handleChange={handleChange}
      value="red"
      title="Red"
      name="test1"
      color="red"
       />
      <Input 
      handleChange={handleChange}
      value="green"
      title="Green"
      name="test2"
      color='green'
       />
     


      <label className='sidebar-label-container'>
        <input
        type='radio' onChange={handleChange}
        value="white"
        name='test1'
     
        />
        <span className='checkmark' style={{background:"white"}}></span>

        {/* <span className='checkmark' 
        style={{background: "green", border: "2px solid black",}}>

          
        </span> */}

      </label>

    </div>
  )
}

export default Colors
