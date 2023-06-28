import styles from './Footer.module.css'
import icon1 from '../../asserts/Footer__img/instagram.png'
import icon2 from '../../asserts/Footer__img/vk.png'
import icon3 from '../../asserts/Footer__img/tik-tok.png'
import icon4 from '../../asserts/Footer__img/twitter.png'
import phoneIcon from '../../asserts/Footer__img/phone-call.png'
import mailIcon from '../../asserts/Footer__img/mail.png'
import wwwIcon from '../../asserts/Footer__img/globe.png'
import logo from '../../asserts/LOGO.png'
import Button from "../UI/Button.jsx";
import React from "react";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styles.mobile_container} container`}>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__left}>
                        <div className={styles.footer__follow}>
                            <img className={styles.logo} src={logo} alt="logo"/>
                            <h2>Подпишитесь на нас!</h2>
                            <div className={styles.footer__follow_icon}>
                                <div className={styles.footer__follow_icon_item}>
                                    <img src={icon1} alt="icon1"/>
                                </div>
                                <div className={styles.footer__follow_icon_item}>
                                    <img src={icon2} alt="icon2"/>
                                </div>
                                <div className={styles.footer__follow_icon_item}>
                                    <img src={icon3} alt="icon3"/>
                                </div>
                                <div className={styles.footer__follow_icon_item}>
                                    <img src={icon4} alt="icon4"/>
                                </div>
                            </div>
                            <div className={styles.btn}>
                                <Button textButton={"ЗАКАЗ СТОЛИКА"} w={157} h={47} bg={"#FF7400"} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__links}>
                        <h2>Ссылки</h2>
                        <div className={styles.footer__links}>
                            <div className={styles.footer__links_item}>
                                <a href="#">Главная</a>
                            </div>
                            <div className={styles.footer__links_item}>
                                <a href="#">Меню</a>
                            </div>
                            <div className={styles.footer__links_item}>
                                <a href="#">О нас</a>
                            </div>
                            <div className={styles.footer__links_item}>
                                <a href="#">Бронь</a>
                            </div>
                            <div className={styles.footer__links_item}>
                                <a href="#">Для соотрудничества</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__contact}>
                        <h2>Свяжитесь с нами</h2>
                        <div className={styles.footer__links}>
                            <div className={styles.footer__links_item}>
                                <a href="#">г. Санкт-Петербург, д. 85</a>
                            </div>
                            <div className={styles.footer__links_item}>
                                <img src={phoneIcon} alt="arrow"/>
                                <a href="#">+999-888-76-54</a>
                            </div>
                            <div className={styles.footer__links_item}>
                                <img src={mailIcon} alt="arrow"/>
                                <a href="#">info@gmail.com</a>
                            </div>
                            <div className={styles.footer__links_item}>
                                <img src={wwwIcon} alt="arrow"/>
                                <a href="#">www.yourdomain.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
