import React from 'react';
import ButtonStyles from './ButtonStyle.module.css';

const Button = ({ textButton, w, h, bg, onClick }) => {

    let ButtonStyle = {
        width: w + 'px',
        height: h + 'px',
        background: bg,
        fontFamily: `'Open Sans', sans-serif`,
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
    };
    return (<>
        <button onClick={onClick} className={ButtonStyles.button} style={ButtonStyle}>{textButton}</button>
    </>);
};
export default Button;
