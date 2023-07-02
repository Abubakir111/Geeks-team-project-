import React from "react";
const Button = ({ textButton, w, h, bg, onClick }) => {
  let ButtonStyle = {
    width: w + 'px',
    height: h + 'px',
    background: bg,
    fontFamily: `'Open Sans', sans-serif`,
    border: 'none',
    color: '#fff',
    fontWeight: '400',
    cursor: 'pointer'
  }
  return (<>
    <button onClick={onClick} style={ButtonStyle}>{textButton}</button>
  </>)
}
export default Button 