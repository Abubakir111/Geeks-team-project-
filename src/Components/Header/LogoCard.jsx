import React from "react";
import LogoStyle from './LogoCardStyle.module.css'
import CardImage from '../../asserts/CardLogo.png'
const LogoCard = ({ title, titles, text }) => {
    return (
        <div className={LogoStyle.contain}>
            <img src={CardImage} alt={'картинка'} className={LogoStyle.cardImg} />
            <div className={LogoStyle.title}>
                {title}
                <span className={LogoStyle.titleSpan}>
                    {titles}
                </span>
            </div>
            <div className={LogoStyle.item}>
                {
                    text
                }
            </div>
        </div>)
}
export default LogoCard