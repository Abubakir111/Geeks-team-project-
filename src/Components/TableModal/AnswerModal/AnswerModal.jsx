import classes from "./AnswerModal.module.css";

const AnswerModal =()=>{
    return (
        <div className={classes.modal}>
            <div className={classes.modal__dialog}>
                <div className={classes.modal__content}>
                    <div className={classes.modal__close}>&times;</div>
                    <div className={classes.modal__title}><b> Ваш столик под номером</b></div>
                    <div className={classes.modal__tableNumber}><b>17</b></div>
                    <div className={classes.modal__answer}><b> Ждем вашего визита, с уважением <span>ALEMOND</span>!</b></div>
                </div>
            </div>
        </div>
    )
}
export default AnswerModal