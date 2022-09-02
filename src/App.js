import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Productpage from './pages/Productpage';



function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/hats' element={<Productpage/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
