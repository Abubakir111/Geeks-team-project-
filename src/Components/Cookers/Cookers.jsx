import React from "react";
import styles from '../../asserts/Cookers_module.css';
import cooker1 from '../../img cook/cog.png'
import cooker2 from '../../img cook/Mask Group (1).png'
import cooker3 from '../../img cook/image 4.png'

import Title from "../UI/Title";
const Cookers = () =>
{
    const images = [cooker1, cooker2, cooker3]
    return (
        <div className={styles.wrapper}>
                <Title title={'Галерея'} item={'Блюд'} />
                <div className={styles.cookers}>
                    {
                        images.map((cooker, i) => <div className={styles.cookersCard} key={i}><img src={cooker} alt="img" /></div>)
                    }
                </div>
              <div>sdsdssd</div>
        </div>
    )
}
export default Cookers

