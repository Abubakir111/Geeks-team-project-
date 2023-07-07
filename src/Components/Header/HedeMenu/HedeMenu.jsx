import menuStyle from './HedeMenuStyle.module.css'
import Product from './Product/Product'
import MenuFon from '../../../asserts/Heder_img/hederMenu_images/menuFon7.jpg'
import Button from '../../UI/Button'

const HedeMenu = ({Toggles, delivery}) => {

    return (<div className={menuStyle.container}>
        <img className={menuStyle.fonimage} src={MenuFon} alt="background"/>
        <button onClick={Toggles} className={menuStyle.closBtn}>&#x2717;</button>
        <div className={menuStyle.btnContainer}>
            <Button onClick={delivery} textButton={"ЗАКАЗАТЬ"} w={157} h={57} bg={"#FF7400"}/>
        </div>
        <div>
            <Product/>
        </div>
    </div>)
}
export default HedeMenu