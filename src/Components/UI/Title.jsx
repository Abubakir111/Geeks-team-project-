import TitleStyle from './TitleStyle.module.css'
const Title = ({ title, item }) => {

    return (
        <div className={TitleStyle.wrapper}>
            <h2 className={TitleStyle.title}>{title}</h2>
            <h2 className={TitleStyle.item}>{item}</h2>
        </div>
    )
}
export default Title