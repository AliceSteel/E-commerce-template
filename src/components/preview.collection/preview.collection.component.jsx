import React, {useContext} from 'react'
import { ProductsContext } from '../../contexts/products.context'
import ProductCard from '../product-card/product-card.component'
import './preview.collection.styles.scss'

const PreviewCollection = () => {
  const {products} = useContext(ProductsContext);

  return (
    <div className='collection_preview'>
        <h1 className='title'>{products.title}</h1>
        <div className="preview">
            {
                products.filter((item, index)=> index < 4)
                    .map(({id, ...itemProps}) => (
                    <ProductCard key={id}{...itemProps} />
                ))
            }
        </div>
    </div>
  )
}

export default PreviewCollection