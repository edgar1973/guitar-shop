import React from 'react';
import cls from './Item.module.css';

const Item = (props) => {
  return (
    <div className={cls.item}>
      <img src={props.imgUrl} alt="item" />
      <p className={cls.name}>{props.name}</p> 
      <p className={cls.price}>${props.price}</p>
      <div className={cls.button_block}>
        <button className={cls.details}>Show details</button>
        <button className={cls.cart} onClick={props.addItem}>Add to cart</button>
      </div>
    </div>
  );
};

export default Item;