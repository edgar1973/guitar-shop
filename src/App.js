import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MyCart from './components/MyCart/MyCart';
import Shop from './components/Shop/Shop';
import { response } from 'express';



const App = () => {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [allItems, setAllItems] = React.useState([]);
  let [cartItems] = React.useState([]);


  const toggleCart = () => {
    const body = document.querySelector('body');
    if (!cartOpened) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    setCartOpened(!cartOpened);
  };

  // React.useEffect(() => {
  //   fetch('https://6112d8ea89c6d00017ac05ae.mockapi.io/items')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then(json => {
  //       setAllItems(json);
  //     });
  // }, []);

  React.useEffect(() => {
  const GUITARS_REST_API_URL = 'http://localhost:8080/api/guitars';
  axios.get(GUITARS_REST_API_URL);
  getGuitars().then((res) => {
    setAllItems(res.data);
  });
}, []);


  return (
    <BrowserRouter>
      <Header isOpened={toggleCart} />
      {cartOpened && <MyCart add={cartItems} />}
      <main className="pages">
        <Route path="/Shop" render={() => <Shop allItems={allItems} addToCart={cartItems} />} />
      </main>
    </BrowserRouter>
  );
}

export default App;
