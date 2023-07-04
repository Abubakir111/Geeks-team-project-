import React from "react"
import Burger from '../../asserts/img-our-menu/burger-i.jpg'
import Menu from '../../asserts/img-our-menu/menu-bg.jpg'

const OurMenu = () => {
    return (<>
    <div className={OurMenuStyle.OurMenuWrapper}>
        <div className="menu_item">
            Наше меню
        </div>

        <div className="menu_items">

            <div className="menu_item">
                <div className="menu_image">
                    <img className={OurMenuStyle.OurMenuImage} src={Burger} alt="there burger2" />
                </div>

                <div className="menu_text">
                    Гамбургер макси
                </div>

                <div className="menu_subtext">
                    Максимально толстый <br/> слой мяса
                </div>

                <div className="menu_button">
                    <a href="#" className="menu_btn">ЗАКАЗАТЬ</a>
                </div>

                <div className="menu_item">
                    <img className={OurMenuStyle.OurMenuImage} src={Burger} alt="there burger2" />
                </div>

                <div className="menu_text">
                    Гамбургер макси
                </div>

                <div className="menu_subtext">
                    Максимально толстый <br/> слой мяса
                </div>

                <div className="menu_button">
                    <a href="#" className="menu_btn">ЗАКАЗАТЬ</a>
                </div>

                <div className="menu_item">
                    <img className={OurMenuStyle.OurMenuImage} src={Burger} alt="there burger2" />
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default OurMenu