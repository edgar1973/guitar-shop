import React from 'react';
import cls from './MyCartItem.module.css';

const MyCartItem = (props) => {
  return(
    <div className={cls.item}>
      <span className={cls.close} onClick={props.removeItem}>&#10006;</span>
      <div className={cls.left}><img alt="cart-item" src={props.imgUrl}/></div>
      <div className={cls.right}>
        <div className={cls.name}><p>{props.name}</p></div>
        <div className={cls.price}><p>Price: ${props.price}</p></div>
      </div>
    </div>
  );
};

export default MyCartItem;