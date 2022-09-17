import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes} from 'react-router-dom';

import { onAuthStateChangedListener, createUserDocFromAuth } from "./utilities/firebase/firebase";
import { setCurrentUser } from './store/user/user.action';

import Header from './routes/header/header.component';
import Footer from './routes/footer/footer.component';
import Homepage from './routes/homepage/homepage.component';
import Shoppage from './routes/shop/shop.component';
import Ckeckout from './routes/checkout/checkout.component';
import Auth from './routes/authentication/auth.component';
import Blog from './routes/blog/blog.component';

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user) {
                createUserDocFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        })
        return unsubscribe;
    }, [dispatch]);

  return (
    <Routes>
		<Route path='/' element={<Header/>}>
			<Route path='/' element={<Footer/>}>
				<Route index element={<Homepage/>}/>
				<Route path='shop/*' element={<Shoppage/>} />
				<Route path='auth' element={<Auth/>}/>
				<Route path='ckeckout' element={<Ckeckout/>}/>
				<Route path='blog' element={<Blog/>}/>
			</Route>	
		</Route>
    </Routes>    
  );
}

export default App;
