import React from 'react';
import './App.css';
import Home from './components/Home'
import Headers from './components/Header'
import Footer from './components/Footer'


import {Routes, Route} from 'react-router-dom'
import Product from './components/Product';
import ProductItem from './components/ProductItem';
import ProductIndex from './components/ProductIndex';
import { PageNotFound } from './components/PageNotFound';


function App() {
  return (
    <div>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='/' element={<ProductIndex/>}/>
          <Route path = ':id' element ={<ProductItem/>}/>
        </Route>
        <Route path ='*' element={<PageNotFound/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
