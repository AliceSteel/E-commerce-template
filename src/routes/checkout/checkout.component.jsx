import React, {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckoutHeader, TotalWrap } from './checkout.styles.jsx'

const Ckeckout = () => {

	const {cartItems, cartTotal} = useContext(CartContext);

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