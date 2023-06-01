import React from 'react';
import './Products.css'

function Products({products}) {
    const intl = new Intl.NumberFormat()
    return (
        products.length > 0 ? (
            <div className='card'>
              <ul className='card-container'>
                {
                  products.map((item,index)=>{
                    return(
                      <li key={item.product_id}>
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