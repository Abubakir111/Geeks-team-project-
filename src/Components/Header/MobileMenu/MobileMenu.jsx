import classes from './MobileMenu.module.css'
import Overlay from "../../ShoppingCart/Overlay/Overlay.jsx";

const MobileMenu = ({closeMobileMenu, openDelivery, openBooking}) => {
    return (
        <div>
            <nav className={classes.mobile}>
                <a className={classes.mobile__close} href="#" onClick={closeMobileMenu}>&#10006;</a>
                <ul className={classes.mobile__ul}>
                    <li className={classes.mobile__li}>
                        <a className={classes.mobile__a} href="#" onClick={closeMobileMenu}>ГЛАВНАЯ</a>
                    </li>
                    <li className={classes.mobile__li}>
                        <a className={classes.mobile__a} href="#menu" onClick={closeMobileMenu}>МЕНЮ</a>
                    </li>
                    <li className={classes.mobile__li}>
                        <a className={classes.mobile__a} href="#story" onClick={closeMobileMenu}>О НАС</a>
                    </li>
                    <li className={classes.mobile__li}>
                        <a className={classes.mobile__a} href="#" onClick={() => {
                            openBooking()
                            closeMobileMenu()
                        }}>БРОНЬ</a>
                    </li>
                    <li className={classes.mobile__li}>
                        <a className={classes.mobile__a} href="#" onClick={() => {
                            openDelivery()
                            closeMobileMenu()
                        }}>ДОСТАВКА</a>
                    </li>
                </ul>
            </nav>
            <Overlay exit={closeMobileMenu}/>
        </div>
    );
};

export default MobileMenu;