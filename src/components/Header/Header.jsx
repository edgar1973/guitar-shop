import React from 'react';
import cls from './Header.module.css';
import './../../index.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <div className={cls.header}>
      <div className="container">
        <div className={cls.header_inner}>
          <img src="/img/header/logo.png" className={cls.header_img} alt="logo" />

          <nav className={cls.header_nav}>
            <ul>
              <li><NavLink to="/Home" activeClassName={cls.active}>H o m e</NavLink ></li>
              <li><NavLink to="/Shop" activeClassName={cls.active}>S h o p</NavLink></li>
              <li><NavLink to="/About" activeClassName={cls.active}>A b o u t</NavLink></li>
              <li><NavLink to="/Contact" activeClassName={cls.active}>C o n t a c t</NavLink></li>
            </ul>
          </nav>

          <div className={cls.header_cart} id="cart-icon" onClick={props.isOpened}><img src="https://ps.w.org/woo-cart-abandonment-recovery/assets/icon-256x256.png?rev=2096894" alt="cart"/></div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
