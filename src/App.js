import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './routes/header/header.component';
import Homepage from './routes/homepage/homepage.component';
import Shoppage from './routes/shop/shop.component';
import Ckeckout from './routes/checkout/checkout.component';
import Auth from './routes/authentication/auth.component';
import PreviewCollection from './components/category-preview/preview.component';

const App = () => {
  return (
    <Routes>
		<Route path='/' element={<Header/>}>
			<Route index element={<Homepage/>}/>
			<Route path='shop/*' element={<Shoppage/>} />
			<Route path='auth' element={<Auth/>}/>
			<Route path='ckeckout' element={<Ckeckout/>}/>
		</Route> 
    </Routes>    
  );
}

export default App;
