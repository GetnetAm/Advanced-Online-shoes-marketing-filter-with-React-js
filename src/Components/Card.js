import React from 'react'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Card({img, title, star, reviews, prevPrice, newPrice}) {
  return (
  <>
    <section className='card'>
      <img src={img} className='card-img' alt='shoe' />

      <div className='card-details'>
        <h3 className='card-title'>Shoe</h3>
        <section className='card-reviews'>
          <StarPurple500Icon className='ratings-start' />
           <StarPurple500Icon className='ratings-start'/>
            <StarPurple500Icon className='ratings-start'/>
             <StarPurple500Icon className='ratings-start' />

             <span className='total-reviews'>4</span>


        </section>

        <section className='card-price'>
          <div className='price'>
            <del>$300</del>200

          </div>

          <div className='bag'>
            <ShoppingBagIcon className='bag-icon' />

          </div>

        </section>

      </div>

    </section>
  </>
  )
}

export default Card
