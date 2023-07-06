import classes from './Card.module.css';
import Button from '../../UI/Button.jsx';

import burger from '../../../asserts/img_our_menu/burger.png';

const Card = ({ img, price, name, description, goTopPage }) => {


    let picture = img;

    return (
        <div className={classes.card__wrap}>
            <div className={classes.card__imgWrap}>
                <img className={classes.card__img} src={picture} alt='food' />
                <div className={classes.card__price}>{price}</div>
            </div>
            <div className={classes.card__name}>{name}</div>
            <div className={classes.card__sub}>{description}</div>
            <div className={classes.card__btnWrap}>
                <Button id='#logo' onClick={goTopPage} fontWeight={700} bg={'#D67E34'} w={'220'} h={'50'}
                        textButton='ЗАКАЗАТЬ' />
            </div>
        </div>
    );
};

export default Card;