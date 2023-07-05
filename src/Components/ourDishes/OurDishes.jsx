import React from "react"
import OurDishesStyle from '../OurDishes/OurDishesStyle.module.css'
import Burger from '../../asserts/img-our-dishes/burger.jpg'
import Pizza from '../../asserts/img-our-dishes/pizza.jpg'

const OurDishes = () => {
    return (<>
        <div className="Dishes">
            <div className={OurDishesStyle.dishes_title}>
                Наши <span className={OurDishesStyle.dishes_title_span}>Блюда</span>
            </div>
            <div className="burgers">
                <div className=""></div>
                <img className={OurDishesStyle.OurDishesImage} src={Pizza} alt="there pizza" />
            </div>

            <div className="burger_items">
                <div className={OurDishesStyle.burger_item}>
                    <img className={OurDishesStyle.OurDishesImage} src={Burger} alt="there burger" />
                </div>
                <div className="burger_text">
                    Гамбургер мини -------------- 220 ₽
                </div>

                <div className="burger_item">
                    <img className={OurDishesStyle.OurDishesImage} src={Burger} alt="there burger" />
                    <div className="burger_text">
                        Гамбургер мини -------------- 220 ₽
                    </div>
                </div>

                <div className="burger_item">
                    <img className={OurDishesStyle.OurDishesImage} src={Burger} alt="there burger" />
                    <div className="bureger_text">
                        Гамбургер мини -------------- 220 ₽
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default OurDishes