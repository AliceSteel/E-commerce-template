import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, CategoryWrap } from './category.styles.jsx';


const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=> {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

  return (
    <CategoryContainer>
        <h2>{category.toUpperCase()}</h2>
        <CategoryWrap>
            { products &&                  //safequarded from empty array during render
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </CategoryWrap>
    </CategoryContainer>
  )
}

export default Category;