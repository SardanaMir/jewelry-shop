import React from 'react';
import styles from './Card.module.scss';

function Card({onClickFavorite, imageUrl, title, price, onPlus}){
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () =>{
        onPlus({imageUrl, title, price});
        setIsAdded(!isAdded);
    };

    // React.useEffect(()=>{
    //     console.log('fghjkl;');
    // }, [isAdded]);

    return (
        <div className={styles.card}>
            <div className="styles.favorite" onClick={onClickFavorite}>
                <img src="/img/heartUnliked.svg"/>
            </div>
            <img width={118} height={118} className="earrings" src={imageUrl} alt="earrings" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} width={32} height={32} src={isAdded ? '/img/btn-ok.svg' : 'img/btn-plus.svg'} alt="plus"/>
            </div>
        </div>
    );
}

export default Card;

