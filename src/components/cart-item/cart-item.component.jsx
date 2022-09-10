import React from 'react'

import { CartItemContainer, ImgWrap, ItemDetails } from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, qty} = cartItem;
  return (
    <CartItemContainer>
        <ImgWrap>
          <img src={imageUrl} alt={name} />
        </ImgWrap>
        
        <ItemDetails>
            <span>{name}</span>
            <span>{qty} x £{price}</span>
        </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;