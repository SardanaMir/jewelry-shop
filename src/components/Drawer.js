const Drawer = ({onClose, items, onRemove = []}) => {
    return (  
        <div className="overlay">
            {/* style={{display: 'none'}} */}
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина<img onClick={onClose} className="removeBtn cu-p" src="/img/close.svg" /></h2>
                
                {items.length > 0 ? (
                    <div>
                        <div className="items">
                            {items.map((obj) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg"></div>
                                    <div className="mr-20 flex">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price}</b>
                                    </div>
                                    <img className="removeBtn" onClick={() => onRemove(obj.id)} width={32} height={32} src="/img/close.svg" alt="close"/>
                                </div>
                            ))}
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
                ) : (<div></div>)}
            </div>
        </div>
    );
}
 
export default Drawer;