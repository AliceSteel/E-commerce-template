import React, {useState, useContext} from 'react';
import {ProductsContext} from '../../contexts/products.context'
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss'

const Shoppage = () => {
  const {products} = useContext(ProductsContext)

  return (
    <div className='shop_page'>
        {
            products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default Shoppage