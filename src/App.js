import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact 
        element = {<Home/>}/>
        <Route path='/products'  
        element = {<Products/>}/>
        <Route path='/Aboutus'  
        element = {<About/>}/>
        <Route path='/Contact'  
        element = {<Contact/>}/>
      </Routes>
    </Router>
        
      
    </>
  );
}

export default App;
