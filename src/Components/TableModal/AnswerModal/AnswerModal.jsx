import classes from "./AnswerModal.module.css";

const AnswerModal =({close})=>{
    return (
        <div className={classes.modal}>
            <div className={classes.modal__dialog}>
                <div className={classes.modal__content}>
                    <div className={classes.modal__close} onClick={close}>&times;</div>
                    <div className={classes.modal__title}><b> Спасибо!</b></div>
                    <div className={classes.modal__answer}><b> Мы скоро с вами свяжемся! с уважением <span>ALEMOND</span>!</b></div>
                </div>
            </div>
        </div>
    )
}
export default AnswerModal