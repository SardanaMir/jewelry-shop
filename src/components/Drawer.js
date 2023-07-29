const Drawer = () => {
    return (  
        <div style={{display: 'none'}} className="overlay">
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

    );
}
 
export default Drawer;