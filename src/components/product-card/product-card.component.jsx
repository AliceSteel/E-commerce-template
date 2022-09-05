import React from 'react'
import Btn from '../button/button.component';
import './product-card.styles.scss'

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;

  return (
    <div className='product_card_container'>
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Btn btnType='inverted'>Add to cart</Btn>
    </div>
  )
}

export default ProductCard;