import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken }) {
  function BasketLink() {
    if (token !== null) {
      return (
        <>
        
          <li onClick={() => setPage('Basket')}>Корзина</li>
          
        </>
      )
    }
  }

  return (
    <div className="Header">
      <ul>

       <img width="60px" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Wizarding_World_of_Harry_Potter_logo.png"></img>
        <li onClick={() => setPage('Main')}>Главная</li>
        <BasketLink />
      </ul>
      <UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} />
            <img width="60px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Abenteuer_in_Hogwarts.png/640px-Abenteuer_in_Hogwarts.png"></img>
    </div>

  );
}

export default Header;