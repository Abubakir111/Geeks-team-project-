import React from "react";
<<<<<<< HEAD
const Button = ({ textButton, w, h, bg, onClick }) => {
=======
import ButtonStyles from './ButtonStyle.module.css'
const Button = ({ textButton, w, h, bg, }) => {
>>>>>>> edc745a5629d45f834ccc015610a587951a924bb
  let ButtonStyle = {
    width: w + 'px',
    height: h + 'px',
    background: bg,
    fontFamily: `'Open Sans', sans-serif`,
    border: 'none',
    color: '#fff',
    cursor: 'pointer'
  }
  return (<>
<<<<<<< HEAD
    <button onClick={onClick} style={ButtonStyle}>{textButton}</button>
=======
    <button className={ButtonStyles.button} style={ButtonStyle}>{textButton}</button>
>>>>>>> edc745a5629d45f834ccc015610a587951a924bb
  </>)
}
export default Button 