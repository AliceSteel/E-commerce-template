import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';



function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<Shoppage/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
