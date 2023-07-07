import Style from './ProductStyle.module.css'
const Product = () => {
    return (<div className={Style.container}>
        <h1 className={Style.h1}>ALEMOND</h1>
        <h1 className={Style.h1}>Меню</h1>
        <div className={Style.imgContainer}>

        </div>
        <div className={Style.iteemMenuContainer}>
            <div className={Style.textBlo1}>
                <div className={Style.div}>Пицца с сыром <span className={Style.span}>1500 сом </span></div>
                <div className={Style.div}>Цезарь салат  <span className={Style.span}>800 сом</span></div>
                <div className={Style.div}>Бургер <span className={Style.span}>400 сом</span></div>
                <div className={Style.div}>Картофель фри <span className={Style.span}>400 сом </span></div>
                <div className={Style.div}>Паста Карбонара <span className={Style.span}>1300 сом </span></div>
                <div className={Style.div}>Чечевичный суп <span className={Style.span}>400 сом </span></div>
                <div className={Style.div}>Крем суп <span className={Style.span}>450 сом </span></div>
                <div className={Style.div}>Картофельное пюре <span className={Style.span}>500 сом </span></div>
                <div className={Style.div}>Тирамису <span className={Style.span}>700 сом</span></div>
                <div className={Style.div}>Лосось-стейк  <span className={Style.span}>1900 сом</span></div>
            </div>
            <div className={Style.textBlo2}>
                <div className={Style.div}>Медовик   <span className={Style.span}>500 сом </span></div>
                <div className={Style.div}>Луковые кольца   <span className={Style.span}>200 сом</span></div>
                <div className={Style.div}>Брускетта   <span className={Style.span}>700 сом  </span></div>
                <div className={Style.div}>Капрезе салат   <span className={Style.span}>900 сом</span></div>
                <div className={Style.div}>Салат Цезарь с курицей   <span className={Style.span}>1200 сом </span></div>
                <div className={Style.div}> Брюссельская капуста   <span className={Style.span}>600 сом </span></div>
                <div className={Style.div}>Капустный салат <span className={Style.span}>300 сом </span></div>
                <div className={Style.div}>Салат из свежих овощей   <span className={Style.span}>600 сом </span></div>
                <div className={Style.div}>Весенние роллы   <span className={Style.span}>800 сом </span></div>
            </div>
        </div>
    </div>)
}
export default Product