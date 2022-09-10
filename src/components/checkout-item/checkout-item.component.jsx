import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer, Controler, ImgWrap, Item } from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, qty} = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const addHandler = () => addItemToCart(cartItem);
    const reduceHandler = () => removeItemFromCart(cartItem);
    const clearHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
        <ImgWrap>
            <img src={imageUrl} alt={name} />
        </ImgWrap>
        <Item>{name}</Item>
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