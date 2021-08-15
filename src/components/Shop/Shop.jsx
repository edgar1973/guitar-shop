import React from 'react';
import ShopFilter from './Filter/ShopFilter';
import ShopIntro from './Intro/ShopIntro';
import ProductItems from './ProductItems/ProductItems';
import cls from './Shop.module.css';

const Shop = (props) => {
  return (
    <div>
      <ShopIntro />
      <div className="container">
        <div className={cls.content}>
          <ShopFilter />
          <ProductItems allItems={props.allItems} addToCart={props.addToCart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;