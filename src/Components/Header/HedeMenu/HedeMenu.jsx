import menuStyle from './HedeMenuStyle.module.css'
import Product from './Product/Product'
const HedeMenu = ({ Toggles }) => {

    return (<div className={menuStyle.container}>

        <div className={menuStyle.title}>ALEMOND</div>
        <button onClick={Toggles} className={menuStyle.closBtn}>&#x2717;</button>
        <div >
            <Product />
        </div>
    </div>)
}
export default HedeMenu