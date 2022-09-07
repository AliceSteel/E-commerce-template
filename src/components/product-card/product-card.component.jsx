import React, {useContext} from 'react'

import { CartContext } from '../../contexts/cart.context';
import Btn, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import './product-card.styles.scss'

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);
  
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product_card_container'>
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Btn 
          btnType={BUTTON_TYPE_CLASSES.inverted} 
          onClick={addProductToCart}
        >Add to cart</Btn>
    </div>
  )
}

export default ProductCard;