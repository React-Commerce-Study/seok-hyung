import React, { useState } from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import TabContent from '../tabContent/TabContent';

function ProductDetail(props) {
    let {id} = useParams();
    const intl = new Intl.NumberFormat();
    let 찾은상품 = props.products.find(v=> v.product_id === parseInt(id))
    let [amount,setAmount] = useState(1);
    let [totalPrice, setTotalPrice] = useState(찾은상품.price)
    const handleIncrement = () => {
        setAmount(amount + 1);
      };
    
      const handleDecrement = () => {
        setAmount(amount - 1);
      };


    const tabs = [
        {
            title: '버튼',
            content: <div>버튼 정보입니다</div>,
        },
        {
            title: '리뷰',
            content: <div>리뷰 정보입니다.</div>,
        },
        {
            title: 'Q&A',
            content: <div>Q&A 정보입니다</div>,
        },
        {
            title: '반품/교환정보',
            content: <div>반품 교환 정보입니다</div>,
        },
    ];

    return (
        <>
            <div className='wrapper-detail'>
                <div className='detail-container'>            
                    <div className='detail-left'>
                        <img src={`${찾은상품.image}`} alt="상세페이지 이미지" />
                        </div>
                    <div className='detail-right'>
                        <p className='info ellipsis' >{찾은상품.product_info}</p>
                        <p className='name'>{찾은상품.product_name}</p>
                        <p className='price'>{intl.format(찾은상품.price)}</p><span>원</span>
                        <p className='deliveryInfo'>택배 배송 / 무료배송</p>
                        <hr />
                        <div className='amount'>
                            <img onClick={handleDecrement} src="/img/icon-minus-line.svg" alt="" />
                            <div>{amount}</div>
                            <img onClick={handleIncrement} src="/img/icon-plus-line.svg" alt="" />
                        </div>
                        <hr />
                        <div className='total-price'>
                            <div className='price-info'>총 상품 금액</div>
                            <div className='total-amount'>총 수량 <span className='total-amount-span'>{amount}</span>개 | <span className='total-price-span'>{totalPrice * amount}</span>원</div>
                        </div>
                        <div className='detail-btn'>
                            <button className='buy'>바로 구매</button>
                            <button className='shop-bag'>장바구니</button>
                        </div>
                    </div>
                </div>
                <TabContent tabs={tabs} />
            </div>
        </>
    );
}




export default ProductDetail;