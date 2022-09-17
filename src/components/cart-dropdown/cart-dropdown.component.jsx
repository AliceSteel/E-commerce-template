import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import Btn from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../store/cart/cart.selector';

import {CartDropdownContainer, 
		EmptyMessage,
		CartItemsContainer} from './cart-dropdown.styles'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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