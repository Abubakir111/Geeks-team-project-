import classes from './OurMenuStyle.module.css'
import Slider from "./Slider.jsx";

const OurMenu = ({onTopPage}) => {
    return (
        <div className={classes.OurMenu} id={'menu'}>
            <div className={`${classes.mobile__container} container`}>
                <div className={classes.OurMenu__wrap}>
                    <h1 className={classes.OurMenu__title}>Наше меню</h1>
                    <Slider onTopPage={onTopPage}/>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;