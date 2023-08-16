import React from 'react';
import axios from 'axios';
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
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  // вытащить данные из mockAPI 4 стрим 1:50:00
  React.useEffect (() => {
    // fetch ('https://64c688f80a25021fde91bd95.mockapi.io/items')
    // .then((res) => {
    //   return res.json();
    // })
    // .then((json) => {
    //   setItems(json);
    // });

    axios.get('https://64c688f80a25021fde91bd95.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://64c688f80a25021fde91bd95.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) =>{
    axios.post('https://64c688f80a25021fde91bd95.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    // axios.delete(`https://64c688f80a25021fde91bd95.mockapi.io/cart/${id}`);
    // setCartItems(prev => [...prev, obj]);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  }

  return <div className="wrapper clear">
    {cartOpened ? <Drawer items={cartItems} onClose = {() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
    
    <Header onClickCart={() => setCartOpened(true)}/>

    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>{searchValue ? `Поиск по запросу:"${searchValue}"` : 'Все серьги'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search"/>
          {searchValue && (<img onClick={()=> setSearchValue('')} className="clear cu-p" src="/img/close.svg" />)}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
        </div>
      </div>
      
      <div className="d-flex flex-wrap">

        {items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
          <Card 
            key = {index}
            title={item.title}
            price={item.price} 
            imageUrl={item.imageUrl}
            onClickFavorite={() => console.log('Нажали на сердечко')}
            onPlus={(obj) => onAddToCart(obj)}
            />
        ))}

      </div>

    </div>

  </div>

}

export default App;
