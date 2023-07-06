import React from 'react';
import styles from './Cookers.module.css';
import cooker1 from '../../asserts/Cooker/cooker1.jpg';
import cooker2 from '../../asserts/Cooker/cooker2.jpg';
import cooker3 from '../../asserts/Cooker/cooker3.jpg';
import baner from '../../asserts/Cooker/baner.jpg';
import Title from '../UI/Title';

const Cookers = () => {
    const images = [cooker1, cooker2, cooker3];
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.mobile_container} container`}>
                <div className={styles.titleWrap}>
                    <Title title={'Наши'} item={'Повара'} />
                </div>
                <div className={styles.cookers}>
                    {
                        images.map((cooker, i) => <div className={styles.cookersCard} key={i}><img src={cooker}
                                                                                                   alt='img' /></div>)
                    }
                </div>
            </div>
            <div className={styles.baner}><img src={baner} alt='img' /></div>
        </div>
    );
};
export default Cookers;