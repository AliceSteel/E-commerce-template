import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './routes/header/header.component';
import Homepage from './routes/homepage/homepage.component';
import Shoppage from './routes/shop/shop.component';
import Auth from './routes/authentication/auth.component';

const App = () => {
  return (
    <Routes>
		<Route path='/' element={<Header/>}>
			<Route index element={<Homepage/>}/>
			<Route path='shop' element={<Shoppage/>} />
			<Route path='auth' element={<Auth/>}/>
		</Route> 
    </Routes>    
  );
}

export default App;
