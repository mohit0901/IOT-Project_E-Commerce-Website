import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';

// Switch is replaced by Routes in the new version
// Replace {Home} by {<Home/>}
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category"  element={<Category/>} />
          <Route path="/products"  element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
