import React, {useContext} from 'react'

import { CartContext } from '../../contexts/cart.context';
import Btn, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { CardFooter, CardName, ProductCardContainer } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);
  
  const addProductToCart = () => addItemToCart(product);

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