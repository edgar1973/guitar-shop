import React from 'react';
import cls from './MyCart.module.css';
import MyCartItem from './MyCartItem/MyCartItem'
const MyCart = (props) => {
  const [itemdelete, setItemDelete] = React.useState(true);
  let [cartItemsTotalPrice] = React.useState(0);
  
  props.add.forEach(element => {
    cartItemsTotalPrice += element.price;
  });

  const removeItem = (index) => {
    props.add.splice(index, 1);
    setItemDelete(!itemdelete);
  };

  return (
    <div className={cls.cart} id="cart">
      <div className={cls.shadow}>

      </div>
      <div className={cls.cart_inner}>
        <div className={cls.title}><p>C a r t</p></div>
        <div className={cls.added}>
          <div className={cls.added_product}>
            {
              props.add.map((item, index) => {
                return (
                  <MyCartItem
                    key={index}
                    name={item.name}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    removeItem={() => removeItem(index)}
                  />
                )
              })
            }
          </div>
        </div>
        <div className={cls.total}>
          <div className={cls.total_price}><p>Total: ${cartItemsTotalPrice}</p></div>
          <button className={cls.buy}>B U Y</button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;