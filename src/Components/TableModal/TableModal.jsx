import classes from "./TableModal.module.css";
import Overlay from "../ShoppingCart/Overlay/Overlay.jsx";
import {useState} from "react";
import AnswerModal from "./AnswerModal/AnswerModal.jsx";

const TableModal = ({close}) => {
    const [value, setValue] = useState("");
    const [ok, setOk] = useState(false);
    const [success, setSuccess] = useState(true)

    const regex = /^\+996\s?(\(\d{3}\)|\d{3})\s?\d{6}$/

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        setOk(regex.test(inputValue));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем отправку формы
        // Дальнейшая обработка данных формы
    };

    const getSuccess = () => {
        setSuccess(false)
    }

    return (
        <div>
            {success ? <div className={classes.modal}>
                <div className={classes.modal__dialog}>
                    <div className={classes.modal__content}>
                        <form onSubmit={handleSubmit} className={classes.modal__form} action="#">
                            <div className={classes.modal__close} onClick={close}>
                                &times;
                            </div>
                            <div className={classes.modal__title}>Оставьте ваши данные!</div>
                            <input
                                required
                                placeholder="Ваше имя"
                                name="name"
                                type="text"
                                className={classes.modal__input}
                            />
                            <input
                                required
                                placeholder="Ваша фамилия"
                                name="name"
                                type="text"
                                className={classes.modal__input}
                            />
                            <div>
                                <input
                                    value={value}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ваш номер телефона"
                                    name="phone"
                                    type="tel"
                                    className={classes.modal__input}
                                    style={{position: 'relative'}}
                                />
                                <div className={classes.modal__check}>{ok ?
                                    <span style={{color: 'green'}}>&#10004;</span> :
                                    <span style={{color: 'red'}}>&#10006;</span>}</div>
                            </div>
                            <button
                                onClick={getSuccess}
                                disabled={!ok}
                                className={`${classes.btn} ${classes.btn_dark} ${classes.btn_min} ${ok ? '' : classes.modal__btnDisabled}`}
                            >
                                Забронировать столик
                            </button>
                        </form>
                    </div>
                </div>
            </div> : <AnswerModal close={close}/>}
            <Overlay exit={close}/>
        </div>
    );
};

export default TableModal;
