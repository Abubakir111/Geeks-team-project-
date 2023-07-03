import menuStyle from './HedeMenuStyle.module.css'
import pizza from '../../../asserts/Heder_img/hederMenu_images/pizza.png'
import beverages from '../../../asserts/Heder_img/hederMenu_images/napitki.png'
import burger from '../../../asserts/Heder_img/hederMenu_images/burger.png'

const HedeMenu = ({ Toggles }) => {
    const tovar = [
        { title: 'Питца' },
        {
            img: pizza,
            item: "Питца пеперони ",
            prace: 300 + 'сом'
        }

    ]
    return (<div className={menuStyle.container}>

        <div className={menuStyle.menu_container}>Меню</div>
        <button onClick={Toggles} className={menuStyle.closBtn}>&#x2717;</button>
        <div className={menuStyle.menuBlock}>
            {
                tovar.map(el =>
                    <div  >
                        <div >
                            <ul>
                                <ul >{el.title}</ul>
                                <li>{el.item} </li>
                            </ul>
                            <img className={menuStyle.img} src={el.img} />
                            sdsdsdfghkls;ci
                        </div>
                    </div>)
            }
        </div>
    </div>)
}
export default HedeMenu