import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import Btn, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { CardFooter, CardName, ProductCardContainer } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
        <img src={imageUrl} alt={name} />
        <CardFooter>
            <CardName>{name}</CardName>
            <span>£{price}</span>
        </CardFooter>
        <Btn 
          btnType={BUTTON_TYPE_CLASSES.inverted} 
          onClick={addProductToCart}
        >Add to cart
        </Btn>
    </ProductCardContainer>
  )
}

export default ProductCard;