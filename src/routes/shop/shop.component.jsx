import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Categories from '../categories-preview/categories.component';
import Category from '../category/category.component';

const Shoppage = () => {
  
  return (
    <Routes>
		<Route index element={<Categories/>} />
		<Route path=':category' element={<Category/>}/>
	</Routes>
  )
}

export default Shoppage;