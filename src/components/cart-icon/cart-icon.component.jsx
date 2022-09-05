import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart_icon_container' onClick={toggleCart}>
            <ShoppingIcon className='shop_icon'/>
            <span className='item_count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;