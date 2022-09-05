import React from 'react'
import Btn from '../button/button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items"></div>
        <Btn>Checkout</Btn>
    </div>
  )
}

export default CartDropdown