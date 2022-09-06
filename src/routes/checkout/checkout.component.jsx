import React, {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const Ckeckout = () => {

	const {cartItems, cartTotal} = useContext(CartContext);

  return (
    <div className='checkout_container'>
        <div className='checkout_header'>
			<div className="header_block">
				<span className='product'>Product</span>
			</div>         
			<div className="header_block">
				<span>Description</span>
			</div>
			<div className="header_block">
				<span>Quantity</span>
			</div>
			<div className="header_block">
				<span>Price</span>
			</div>
			<div className="header_block">
				<span>Remove</span>
			</div>
		</div>
        { cartItems.map((item) => (<CheckoutItem key={item.id} cartItem={item}/>))}
		<span className='total'>Total: £{cartTotal}</span>
    
    </div>
  )
  }

export default Ckeckout