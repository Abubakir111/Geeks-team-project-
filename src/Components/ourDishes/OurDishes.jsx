import Title from '../UI/Title.jsx';
import classes from './OurDishesStyle.module.css';
import foodItems from '../ourMenu/foodItems.js';
import { useEffect, useState } from 'react';

const OurDishes = () => {
     const [count, setCount] = useState(0)
     const length = foodItems.length * 100
     let int
     const goCount = () => {
          int = setInterval(() => {
               setCount(prev => prev + 170)
          }, 4000)
     }

     useEffect(() => {
          goCount()
          return () => {
               clearInterval(int)
          }
     }, [])

     useEffect(() => {
          count >= length ? setCount(prev => prev = 0) : null
     }, [count]);





     return (
          <div className={classes.dishes}>
               <div className='container'>
                    <div className={classes.dishes__title}>
                         <Title title={'Наши'} item={'Блюда'} />
                    </div>
                    <div className={classes.dishes__container}>
                         <div className={classes.dishes__left}></div>
                         <div className={`${classes.dishes__right} ${classes.dishes__mobileContainer}`}>
                              {foodItems.map(item => (
                                   <div key={item.id} className={classes.dishes__wrap} style={{transform: `translateY(-${count}px)`, transition: 'transform 1s ease-in-out'}}>
                                        <img className={classes.dishes__img} src={item.img} alt='food' />
                                        <div className={classes.dishes__name}>{item.name}</div>
                                        <div className={classes.dishes__price}>{item.price} сом</div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default OurDishes;