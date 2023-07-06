import ButtonStyles from './ButtonStyle.module.css';

const Button = ({ textButton, w, h, bg, onClick, fontWeight, id }) => {

     let ButtonStyle = {
          width: w + 'px',
          height: h + 'px',
          background: bg,
          fontFamily: `'Open Sans', sans-serif`,
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: fontWeight,
     };
     return (
          <>
               <button onClick={onClick} className={ButtonStyles.button} style={ButtonStyle}>
                    <a style={{ position: 'absolute', top: '30%', left: 0, right: 0, bottom: 0 }} href={id}>
                         {textButton}
                    </a>
               </button>
          </>);
};
export default Button;
