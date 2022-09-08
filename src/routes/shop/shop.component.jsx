import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Category from '../category/category.component';
import Directory from '../../components/directory/directory.component';

const Shoppage = () => {
  
  return (
    <Routes>
      <Route index element={<Directory/>} />
      <Route path=':category' element={<Category/>}/>
	  </Routes>
  )
}

export default Shoppage;