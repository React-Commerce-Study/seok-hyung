import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav(props) {
    let navigate = useNavigate();
    return (
        <div className='wrapper-nav'>
            <nav>
                <div className='logo-container'>
                    <img onClick={()=>{navigate('/')}} src="/img/Logo-hodu.png" id='main-logo' alt="메인로고" />
                    <input type="text" placeholder='상품을 검색해보세요!' />
                    <button><img src="/img/search.svg" id='search-logo' alt="" /></button>
                </div>
    
                <ul className='nav-right-list'>
                    <li>
                        <img src="/img/icon-shopping-cart.svg" alt="장바구니 이미지" />
                        <p>장바구니</p>
                    </li>
                    <li>
                        <img src="/img/icon-user.svg" alt="유저 이미지"/>
                        <p>로그인</p>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;