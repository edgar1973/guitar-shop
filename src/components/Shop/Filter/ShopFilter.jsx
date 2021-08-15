import React from 'react';
import cls from './ShopFilter.module.css';

const ShopFilter = () => {
  return(
    <div className={cls.filter_block}>
      <p className={cls.title}>F i l t e r</p>
      <hr/>
      <div className={cls.filter}>
        <ul>
          <li>Manufacturer</li>
          <li>Price</li>
          <li>Color</li>
          <li>Number of strings</li>
        </ul>
      </div>
    </div> 
  );
};

export default ShopFilter;