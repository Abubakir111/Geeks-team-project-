import React from "react";
import HeaderStyle from './HeaderStyle.module.css'
import Headerimagelog from '../../asserts/headerLog.png'
import HeaderLogo from '../../asserts/LOGO.png'
import HeaderCart from '../../asserts/cart.png'
import Headerphone from '../../asserts/phone.png'
import Button from "../Ui/Button";
import '../../main.css'
import LogoCard from "./LogoCard";
const Header = () => {
    return (<>
        <div className={HeaderStyle.headerWrapper}>
            <img className={HeaderStyle.headerImage} src={Headerimagelog} alt="Кртинка" />
            <div className="container" >

                <header className={HeaderStyle.header}>
                    <div className={HeaderStyle.headerMenuContain} >
                        <img src={HeaderLogo} alt="Тут логотип" />
                        <div className={HeaderStyle.headerNavBar}>
                            <div>ГЛАВНАЯ</div>
                            <div>МЕНЮ</div>
                            <div>О НАС</div>
                            <div>БРОНЬ</div>
                            <div className={HeaderStyle.cortLince}>
                                <img src={HeaderCart} alt="карзинка" />
                            </div>
                            <div >
                                <img src={Headerphone} alt="" className={HeaderStyle.headerphone} />
                                <span>+999-888-76-54</span>
                                <p>Свяжитесь с нами для</p>
                                <p>бронирования</p>
                            </div>
                            <Button textButton={"ЗАКАЗ СТОЛИКА"} w={157} h={47} bg={"#FF7400"} />
                        </div>
                    </div>
                    <div>
                        <div className={HeaderStyle.TextContain}>
                            <p className={HeaderStyle.TextContainp1}>Добро пожаловать в</p>
                            <p className={HeaderStyle.TextContainp2}>Наш ресторан</p>
                            <p className={HeaderStyle.TextContainp3}>ДОМ ЛУЧШЕЙ ЕДЫ</p>
                            <Button textButton={"VIEW MENU"} w={137} h={47} bg={"#FF7400"} />

                        </div>
                    </div>
                    <div >
                        <LogoCard title={"Магическая "} text={"Атмосфера"} />
                    </div>
                </header>

            </div>
        </div>
    </>)
}
export default Header