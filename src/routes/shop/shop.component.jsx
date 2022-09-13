import React, { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {getCategoriesAndDocs} from '../../utilities/firebase/firebase';
import Category from '../category/category.component';
import Directory from '../../components/directory/directory.component';
import { setCategories } from '../../store/categories/category.action';

const Shoppage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocs('categories');
       dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
}, []);

  return (
    <Routes>
      <Route index element={<Directory/>} />
      <Route path=':category' element={<Category/>}/>
	  </Routes>
  )
}

export default Shoppage;