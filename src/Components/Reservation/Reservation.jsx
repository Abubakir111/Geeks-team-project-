import classes from './Reservation.module.css';
import Button from '../UI/Button.jsx';
import React from 'react';



const Reservation = ({onClick}) => {
     return(
          <div className={classes.reservation}>
               <div className='container'>
                    <div className={classes.reservationInner}>
                         <div className={classes.reservationText}>
                              <h3 className={classes.reservationTitle}>Отпразднуйте в одном из самых лучших ресторанов.</h3>
                              <p className={classes.reservationDesc}>Только в этом месяце бизнес-ланч от 250 ₽</p>
                         </div>
                         <div className={classes.reservationButtonBlock}>
                              <Button onClick={onClick} textButton={"ЗАКАЗ СТОЛИКА"} w={157} h={47} bg={"#FF7400"}/>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Reservation