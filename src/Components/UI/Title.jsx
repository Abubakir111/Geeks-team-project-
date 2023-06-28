import React from "react";
import TitleStyle from './TitleStyle.module.css'
const Title = ({ title, item }) => {

    return (
        <>
            <h2 className={TitleStyle.title}>{title}</h2>
            <h2 className={TitleStyle.item}>{item}</h2>
        </>
    )
}
export default Title