const Header = (props) => {

    return (  
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png"/>
                <div className="headerInfo">
                    <h3 className="text-uppercase">Diamond</h3>
                    <p>Ювелирный магазин</p>
                </div>
            </div>
    
            <ul onClick={props.onClickCart} className="d-flex">
                <li className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg"/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img className="cu-p" width={18} height={18} src="/img/user.svg"/>
                </li>
            </ul>
        </header>
    );
}
 
export default Header;