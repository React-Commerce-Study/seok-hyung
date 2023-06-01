import React, { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import Carousel from './components/carousel/Carousel';
import Products from './components/products/Products';
import ProductDetail from './components/detail/ProductDetail'
import { Routes,Route,Link } from 'react-router-dom';

import './style.css'
import './index.css'

function App() {
  let [products, setProducts] = useState([])
  let carouselImages = products.map((item)=>item.image)
  
  useEffect(()=>{
    fetchProducts()
  },[])
  
  async function fetchProducts(){
    try{
      const response = await fetch(`https://openmarket.weniv.co.kr/products/`);
      
      if(!response.ok){ 
        throw new Error('네트워크에 문제가 있습니다.')
      }
      const data = await response.json();
      setProducts(data.results)
    }catch(error){
      console.error('데이터를 가져오는데 문제가 있습니다.', error)
      
    }
  }
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={
          <>
            {products.length >0 ? <Carousel images={carouselImages} /> : null}
            {products.length >0 ? <Products products={products}/> : <p>Loading...</p>}
          </>

        } />

        <Route path='/detail/' element={ <ProductDetail products = {products} />} /> 
      </Routes>
    </>
  );
}

export default App;