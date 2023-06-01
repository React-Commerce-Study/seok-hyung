import React from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    let {id} = useParams();
    // console.log(props.products)
    let 찾은상품 = props.products.find(x=> x.product_id == id)
    return (
        <>
            <h2>안녕하세요</h2>
            <p>제 이름은 톰입니다.</p>
        </>
    );
}

export default ProductDetail;
