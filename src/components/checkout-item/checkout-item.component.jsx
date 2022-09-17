import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action.js';

import { CheckoutItemContainer, Controler, ImgWrap, Item } from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, qty} = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const reduceHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
        <ImgWrap>
            <img src={imageUrl} alt={name} />
        </ImgWrap>
        <Item>{name.toUpperCase()}</Item>
        <Item>
            <Controler onClick={reduceHandler}>&#10094;</Controler>
            <span>{qty}</span>
            <Controler onClick={addHandler}>&#10095;</Controler>
        </Item>
        <Item>{price}</Item>
        <Item>
          <Controler onClick={clearHandler}>&#10005;</Controler>
        </Item>
        
    </CheckoutItemContainer>
  )
}

export default CheckoutItem