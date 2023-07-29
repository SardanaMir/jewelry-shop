function Card(){
    return (
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
    );

}

export default Card;

