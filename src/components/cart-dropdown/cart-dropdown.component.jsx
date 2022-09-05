import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'

import Btn from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => navigate('/ckeckout')
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
          {cartItems.map(item => (<CartItem key={item.id} cartItem={item}/>))}
        </div>
        <Btn onClick={checkoutHandler}>Checkout</Btn>
    </div>
  )
}

export default CartDropdown