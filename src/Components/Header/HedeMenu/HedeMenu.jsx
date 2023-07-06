import menuStyle from './HedeMenuStyle.module.css'
import Product from './Product/Product'
import MenuFon from '../../../asserts/Heder_img/hederMenu_images/menuFon7.jpg'
const HedeMenu = ({ Toggles }) => {

    return (<div className={menuStyle.container}>
        <img className={menuStyle.fonimage} src={MenuFon} alt="" srcset="" />
        <button onClick={Toggles} className={menuStyle.closBtn}>&#x2717;</button>
        <div >
            <Product />
        </div>
    </div>)
}
export default HedeMenu