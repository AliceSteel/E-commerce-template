import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {ShopIcon,
        CartIconContainer,
        ItemCount} from './cart-icon.styles.jsx'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShopIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;