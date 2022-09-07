import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, qty} = cartItem;
  return (
    <div className='cart-item-container'>
        <div className="img_wrap">
          <img src={imageUrl} alt={name} />
        </div>
        
        <div className="item-details">
            <span className='name'></span>
            <span className='price'>{qty} x £{price}</span>
        </div>
       
    </div>
  )
}

export default CartItem