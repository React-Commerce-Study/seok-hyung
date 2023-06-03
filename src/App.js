import React, { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import Carousel from './components/carousel/Carousel';
import Products from './components/products/Products';
import ProductDetail from './components/detail/ProductDetail'
import { Routes,Route} from 'react-router-dom';

import './style.css'
import './index.css'
import TabContent from './components/tabContent/TabContent';

function App() {
  let [products, setProducts] = useState([])
  let carouselImages = products.map((item)=>item.image)
  // const tabs = [
  //   {
  //     title: 'Tab 1',
  //     content: <div>This is the content of Tab 1.</div>,
  //   },
  //   {
  //     title: 'Tab 2',
  //     content: <div>This is the content of Tab 2.</div>,
  //   },
  //   {
  //     title: 'Tab 3',
  //     content: <div>This is the content of Tab 3.</div>,
  //   },
  // ];
  
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

        <Route path='/detail/:id' element={ <ProductDetail products = {products}  />} /> 
      </Routes>
      {/* <TabContent tabs={tabs} /> */}
    </>

  );
}

export default App;