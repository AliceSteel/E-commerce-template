import React from 'react'
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckoutHeader, TotalWrap } from './checkout.styles.jsx'

const Ckeckout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
        <CheckoutHeader>
			<div>Product</div>         
			<div>Description</div>
			<div>Quantity</div>
			<div>Price</div>
			<div>Remove</div>
		</CheckoutHeader>

        { cartItems.map((item) => (<CheckoutItem key={item.id} cartItem={item}/>))}
		
		<TotalWrap>Total: £{cartTotal}</TotalWrap>
    
    </CheckoutContainer>
  )
  }

export default Ckeckout;