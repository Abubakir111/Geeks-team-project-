import React from "react";
import LogoStyle from './LogoCardStyle.module.css'
import CardImage from '../../asserts/CardLogo.png'
const LogoCard = ({ title, text }) => {
    return (
        <div className={LogoStyle.contain}>
            <img src={CardImage} alt={'картинка'} className={LogoStyle.cardImg} />
            <div className={LogoStyle.title}>
                {title}
                <span className={LogoStyle.titleSpan}>
                    {text}
                </span>
            </div>
            <div className={LogoStyle.item}>
                В нашем заведении царит магическая атмосфера
                наполненная вкусными ароматами
            </div>
        </div>)
}
export default LogoCard