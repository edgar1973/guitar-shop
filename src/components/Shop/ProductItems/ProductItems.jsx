import React from 'react';
import Item from './Item/Item';
import cls from './ProductItems.module.css';

const ProductItems = (props) => {
  const AddItem = (item) => {
    props.addToCart.push(item);
  }

  return (
    <div className={cls.product_items}>
      {
        props.allItems.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
              addItem={() => AddItem(item)}
            />
          )

        })
      }
    </div>
  );
};

export default ProductItems;