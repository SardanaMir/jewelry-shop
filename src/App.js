import React from 'react';
import 'macro-css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  // {
  //   "title": "Стальные серьги Nouvelle с фианитами", 
  //   "price": 3600,
  //   "imageUrl": "/img/earrings/E-1107-01-C.jpg"
  // },
  // {
  //   "title": "Серебряные серьги 'Сердце' Moonka", 
  //   "price": 11400,
  //   "imageUrl": "/img/earrings/crg-er-ctr.jpg"
  // },
  // {
  //   "title": 'Серьги Swarovski Matrix', 
  //   "price": 33250,
  //   "imageUrl": "/img/earrings/5647591.jpg"
  // },  
  // {
  //   "title": "Серьги из белого золота Graf Кольцов", 
  //   "price": 39100,
  //   "imageUrl": "/img/earrings/DN-S108-B.jpg"
  // },
  // {
  //   "title": "Серьги из белого золота Brilliant Style Jewelry", 
  //   "price": 100460,
  //   "imageUrl": "/img/earrings/4102-21001.jpg"
  // },
]

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  // вытащить данные из mockAPI 4 стрим 1:50:00
  React.useEffect (() => {
    fetch ('https://64c688f80a25021fde91bd95.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) =>{
    setCartItems(prev => [...prev, obj]);
  }

  return <div className="wrapper clear">
    {cartOpened ? <Drawer items={cartItems} onClose = {() => setCartOpened(false)}/> : null}
    
    <Header onClickCart={() => setCartOpened(true)}/>

    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>Все серьги</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search"/>
          <input placeholder="Поиск..."/>
        </div>
      </div>
      
      <div className="d-flex flex-wrap">

        {items.map((item) => (
          <Card 
          title={item.title}
          price={item.price} 
          imageUrl={item.imageUrl}
          onClickFavorite={() => console.log('Нажали на сердечко')}
          onPlus={(obj) => onAddToCart(obj)}/>
        ))}

      </div>

    </div>

  </div>

}

export default App;
