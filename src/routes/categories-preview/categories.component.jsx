import React, { useContext} from 'react';
import {CategoriesContext} from '../../contexts/categories.context'
import Preview from '../../components/category-preview/preview.component';

const Categories = () => {
  const {categoriesMap} = useContext(CategoriesContext)
  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
			const products = categoriesMap[title];
			return (<Preview key={title} title={title} products={products} />)
		})
          
      } 
    </>
  )
}

export default Categories