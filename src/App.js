import 'macro-css';
function App() {
  return <div className="wrapper clear">
    
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина<img className="removeBtn cu-p" src="/img/close.svg" /></h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(/img/E-1107-01-C.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Стальные серьги Nouvelle mode E-1107-01-C с фианитами</p>
              <b>3 600 руб.</b>
            </div>
            <img className="removeBtn" width={32} height={32} src="/img/close.svg" alt="close"/>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(/img/E-1107-01-C.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Стальные серьги Nouvelle mode E-1107-01-C с фианитами</p>
              <b>3 600 руб.</b>
            </div>
            <img className="removeBtn" width={32} height={32} src="/img/close.svg" alt="close"/>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>7 200 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>360 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
        </div>

      </div>
    </div>

    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png"/>
        <div className="headerInfo">
          <h3 className="text-uppercase">Diamond</h3>
          <p>Ювелирный магазин</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg"/>
          <span>1205 руб.</span>
        </li>
        <li>
        <img width={18} height={18} src="/img/user.svg"/>
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Все серьги</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search"/>
          <input placeholder="Поиск..."/>
        </div>
      </div>
      
      <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img src="/img/heartLiked.svg"/>
          </div>
          <img width={118} height={118} className="earrings" src="/img/E-1107-01-C.jpg" alt="earrings" />
          <h5>Стальные серьги Nouvelle mode E-1107-01-C с фианитами</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>3 600 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/plus.svg" alt="plus"/>
            </button>
          </div>
        </div>
        <div className="card">
        <div className="favorite">
          <img src="/img/heartUnliked.svg"/>
        </div>
        <img width={118} height={118} className="earrings" src="/img/E-1107-01-C.jpg" alt="earrings" />
          <h5>Стальные серьги Nouvelle mode E-1107-01-C с фианитами</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>3 600 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/btn.svg" alt="plus"/>
            </button>
          </div>
        </div>
        <div className="card">
        <div className="favorite">
          <img src="/img/heartUnliked.svg"/>
        </div>
        <img width={118} height={118} className="earrings" src="/img/E-1107-01-C.jpg" alt="earrings" />
          <h5>Стальные серьги Nouvelle mode E-1107-01-C с фианитами</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>3 600 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/plus.svg" alt="plus"/>
            </button>
          </div>
        </div>
        <div className="card">
        <div className="favorite">
          <img src="/img/heartUnliked.svg"/>
        </div>
        <img width={118} height={118} className="earrings" src="/img/E-1107-01-C.jpg" alt="earrings" />
          <h5>Стальные серьги Nouvelle mode E-1107-01-C с фианитами</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>3 600 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/plus.svg" alt="plus"/>
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>

}

export default App;
