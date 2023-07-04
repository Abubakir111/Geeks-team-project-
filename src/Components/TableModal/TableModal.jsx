import classes from "./TableModal.module.css";
import Overlay from "../ShoppingCart/Overlay/Overlay.jsx";
import {useState} from "react";
import AnswerModal from "./AnswerModal/AnswerModal.jsx";

const TableModal = (onClick) => {
    return (
        <div>
            <div className={classes.modal}>
                <div className={classes.modal__dialog}>
                    <div className={classes.modal__content}>
                        <form action="#">
                            <div className={classes.modal__close}>&times;</div>
                            <div className={classes.modal__title}>Оставьте ваши данные!</div>
                            <input required placeholder="Ваше имя" name="name" type="text" className={classes.modal__input} />
                            <input required placeholder="Ваша фамилия" name="name" type="text" className={classes.modal__input} />
                            <input required placeholder="Ваш номер телефона" name="phone" type="phone" className={classes.modal__input} />
                            <button  className={`${classes.btn} ${classes.btn_dark} ${classes.btn_min}`}>Забронировать столик</button>
                        </form>
                    </div>
                </div>
            </div>
            <Overlay exit={close}/>
        </div>
    )
}

export default TableModal;
