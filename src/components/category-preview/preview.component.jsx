import React from 'react';
import {Link} from 'react-router-dom';
import ProductCard from '../product-card/product-card.component'
import './preview.collection.styles.scss'

const Preview = ({title, products}) => {
  return (
    <div className='preview_container'>
        <h1 >
          <Link className='title' to={title}>{title}</Link>
        </h1>
        <div className="preview">
            {
              products.filter((_, index)=> index < 4)
                    .map((product) => (
                    <ProductCard key={product.id} product={product} />
              ))
            }
        </div>
    </div>
  )
}

export default Preview;