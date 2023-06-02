import React from 'react';
import './Products.css'
import { useNavigate } from 'react-router-dom';

function Products({products}) {
  console.log(products)
  const intl = new Intl.NumberFormat();
  let navigate = useNavigate();
  return (
      products.length > 0 ? (
          <div className='wrapper-product'>
            <ul className='product-container'>
              {
                products.map((item,index)=>{
                  return(
                    <li key={item.product_id} onClick={()=>{
                      navigate(`/detail/${item.product_id}`)
                    }} >
                      <img src={`${item.image}`} alt="" />
                      <p className='ellipsis'>{item.product_info}</p>
                      <h2>{item.product_name}</h2>
                      <strong>{intl.format(item.price)}원</strong>
                    </li>
                  )
                })   
              }
            </ul>
          </div>
        ) : (<p>Loading...</p>)
  );
}

export default Products;