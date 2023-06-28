import style from './Gallery.module.css'
import Title from "../UI/Title.jsx";
import {useEffect, useState} from "react";

const Gallery = () => {

    const [data, setData] = useState()

    const fetchData = async () => {
        try {
            const data = await fetch('https://picsum.photos/v2/list')
            const response = await data.json()
            const sliceResponse = response.slice(0, 6)
            setData(sliceResponse)
        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={style.gallery}>
            <div className="container">
                <div className={style.title}>
                    <Title title={'Галерея'} item={'Блюд'}/>
                </div>
                {data && (
                    <div className={style.mobile__container}>
                        <div className={style.gallery__body}>
                            <div className={style.gallery__bodyTop}>
                                <img className={`${style.gallery__img} ${style.img_1}`} src={data[0].download_url} alt="pic"/>
                                <img className={`${style.gallery__img}`} src={data[1].download_url} alt="pic"/>
                                <img className={`${style.gallery__img} ${style.img_3}`} src={data[2].download_url} alt="pic"/>
                            </div>
                            <div className={style.gallery__bodyBottom}>
                                <img className={`${style.gallery__img}`} src={data[3].download_url} alt="pic"/>
                                <img className={`${style.gallery__img}`} src={data[4].download_url} alt="pic"/>
                                <img className={`${style.gallery__img} ${style.img_6}`} src={data[5].download_url} alt="pic"/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Gallery