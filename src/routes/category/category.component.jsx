import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss'

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=> {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

  return (
    <>
    <div className="category_container">
        <h2>{category.toUpperCase()}</h2>
            <div className='category_wrap'>
            { products &&                  //safequarded from empty array during render
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
       
    </>
    
  )
}

export default Category;