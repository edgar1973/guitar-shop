import React from 'react';
import cls from './ShopIntro.module.css';

const ShopIntro = () => {
  return (
    <div className={cls.intro}>
      <div className={cls.left}>
        <p>S</p>
        <p>H</p>
        <p>O</p>
        <p>P</p>
      </div>
      <div className={cls.right}>
        <img src="https://img.stereo.ru/v3/covers/05/5117ec3-46c0-43a5-a982-8f3e73bac6f9.jpeg" alt="intro" />
      </div>
    </div>
  );
};

export default ShopIntro;