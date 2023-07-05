import Style from './ProductStyle.module.css'
import burger from '../../../../asserts/Heder_img/hederMenu_images/burger.png'
import pizza from '../../../../asserts/Heder_img/hederMenu_images/pizza.png'
import napitki from '../../../../asserts/Heder_img/hederMenu_images/salat.png'
import Button from '../../../UI/Button'
const Product = ({ onClick }) => {
    return (<div className={Style.container}>
        <h1 className={Style.h1}>Меню</h1>
        <div className={Style.imgContainer}>
            {/* <img className={Style.imag} src={burger} alt="" srcset="" />
            <img className={Style.imag} src={pizza} alt="" srcset="" />
            <img className={Style.imag} src={napitki} alt="" srcset="" /> */}
            <div className={Style.btnContainer} >
                <Button onClick={onClick} textButton={"заказать"} w={157} h={57} bg={"#FF7400"} />
            </div>
        </div>
        <div className={Style.iteemMenuContainer}>
            <div>
                <h1 className={Style.h1}> Питца </h1>
                <div className={Style.div}>Пицца с сыром  ---------<span>1500 сом </span></div>
                <div className={Style.div}>Цезарь салат   --------- <span>800 сом</span></div>
                <h1 className={Style.h1}> Бургеры </h1>
                <div className={Style.div}>Бургер  --------- <span>400 сом</span></div>
                <div className={Style.div}>Картофель фри  ---------<span>400 сом </span></div>

                <h1 className={Style.h1}> блюда </h1>
                <div className={Style.div}>Паста Карбонара  ---------  <span>1300 сом </span></div>
                <div className={Style.div}>Чечевичный суп  --------- <span>400 сом </span></div>
                <div className={Style.div}>Крем суп  ---------<span>450 сом </span></div>
                <div className={Style.div}>Картофельное пюре  --------- <span>500 сом </span></div>
                <div className={Style.div}>Тирамису  --------- <span>700 сом</span></div>
                <div className={Style.div}>Лосось-стейк   --------- <span>1900 сом</span></div>




            </div>
            <div>
                <h1 className={Style.h1}> Десерт </h1>
                <div className={Style.div}>Медовик  --------- <span>500 сом </span></div>
                <div className={Style.div}>Луковые кольца  --------- <span>200 сом</span></div>
                <div className={Style.div}>Брускетта  ---------<span>700 сом  </span></div>
                <h1 className={Style.h1}> салаты </h1>
                <div className={Style.div}>Капрезе салат  --------- <span>900 сом</span></div>
                <div className={Style.div}>Салат Цезарь с курицей  --------- <span>1200 сом </span></div>
                <div className={Style.div}> Брюссельская капуста  --------- <span>600 сом </span></div>
                <div className={Style.div}>Капустный салат--------- <span>300 сом </span></div>
                <div className={Style.div}>Салат из свежих овощей  --------- <span>600 сом </span></div>
                <h1 className={Style.h1}> Роллы </h1>
                <div className={Style.div}>Весенние роллы  --------- <span>800 сом </span></div>
            </div>

        </div>
    </div>)
}
export default Product