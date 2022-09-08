import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'

import Btn from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import {CartDropdownContainer, 
		EmptyMessage,
		CartItemsContainer} from './cart-dropdown.styles'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => navigate('/ckeckout')
  
  return (
    <CartDropdownContainer>
        <CartItemsContainer>
          	{ cartItems.length ? 
				(cartItems.map(item => (<CartItem key={item.id} cartItem={item}/>)))				
				: (<EmptyMessage>Your cart is empty</EmptyMessage>)
          	}
        </CartItemsContainer>
        <Btn onClick={checkoutHandler}>Checkout</Btn>
    </CartDropdownContainer>
  )
}

export default CartDropdown