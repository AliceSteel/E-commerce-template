import React, {useState} from 'react';
import SHOP_DATA from '../../data/shop.data';
import PreviewCollection from '../../components/preview.collection/preview.collection.component';

const Shoppage = () => {
    const shopData = SHOP_DATA;

  return (
    <div className='shop-page'>
        {
            shopData.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id}{...otherCollectionProps}/>
            ))
        }
    </div>
  )
}

export default Shoppage