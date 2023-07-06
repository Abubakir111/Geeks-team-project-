import Title from '../UI/Title.jsx';
import classes from './OurDishesStyle.module.css';
import foodItems from '../ourMenu/foodItems.js';

const OurDishes = () => {
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
                                   <div key={item.id} className={classes.dishes__wrap}>
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