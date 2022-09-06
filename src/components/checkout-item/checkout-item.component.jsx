import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, qty} = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const addHandler = () => addItemToCart(cartItem);
    const reduceHandler = () => removeItemFromCart(cartItem);
    const clearHandler = () => clearItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
            <div className='arrow' onClick={reduceHandler}>&#10094;</div>
            <span className='value'>{qty}</span>
            <div className='arrow' onClick={addHandler}>&#10095;</div>
        </div>
        <span className='price'>{price}</span>
        <div className="remove-button" onClick={clearHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem