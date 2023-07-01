import style from './Guests.module.css'

import person1 from '../../asserts/Guest-img/person-1.jpg'
import person2 from '../../asserts/Guest-img/person-2.jpg'
import person3 from '../../asserts/Guest-img/person-3.jpg'


import { useEffect, useState } from "react";

const guests = [
    {
        id: 1,
        pic: person1,
        name: 'Николай',
        review: 'Мой День рождения был незабываемым благодаря этому ресторану! Я прочувствовал атмосферу родной Армении в каждой детали. Обслуживание было на высшем уровне, а особенно порадовал комплимент в виде фруктовой тарелки. Этот ресторан стоит рекомендовать всем моим друзьям и родственникам, особенно тем, кто путешествует в Санкт-Петербург!'
    },
    {
        id: 2,
        pic: person2,
        name: 'Антон',
        review: 'Посещение ресторана армянской кухни было настоящим кулинарным путешествием! Мы отведали такие блюда, которые раньше никогда не пробовали, и были приятно удивлены их вкусом и оригинальностью. Особенно запомнились мясные шашлыки и армянский плов. Обслуживание было внимательным, а интерьер ресторана - уютным и аутентичным.'
    },
    {
        id: 3,
        pic: person3,
        name: 'Анна',
        review: 'Я посетила этот ресторан недавно и осталась очень довольной. Обстановка была приятной и уютной, а обслуживание безупречным. Особенно впечатлило качество еды - каждое блюдо было свежим, вкусным и готовлено с большим мастерством. Рекомендую этот ресторан всем, кто ищет отличное место для приятного ужина или обеда.'
    },
]

const Guests = () => {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const objLength = guests.length - 1;
    let intervalId;

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const responseData = await response.json();
            const sliceResponse = responseData.slice(0, 3);
            setData(sliceResponse);
        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    };

    const slider = (index) => {
        setActiveIndex(index);
    };

    const autoSlider = () => {
        intervalId = setInterval(() => {
            setActiveIndex(prevIndex => prevIndex === objLength ? 0 : prevIndex + 1);
        }, 6000);
    };

    useEffect(() => {
        fetchData();
        autoSlider();
        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <div className={style.wrapper}>
            <div className={`${style.mobile_container} container`}>
                <div className={style.guests}>
                    {data && (<p className={style.text}>{data[activeIndex]?.body}</p>)}
                    <img
                        className={`${style.guests__pic} ${style.guests__picActive}`}
                        src={guests[activeIndex].pic}
                        alt={`person${activeIndex + 1}`}
                    />
                    <p className={style.guest}>Посетитель</p>
                    <p className={style.guests__name}>{guests[activeIndex].name}</p>
                    <div className={style.pagination}>
                        <div onClick={() => slider(0)} className={`${style.pagination__item} ${activeIndex === 0 ? style.pagination__itemActive : ''}`}></div>
                        <div onClick={() => slider(1)} className={`${style.pagination__item} ${activeIndex === 1 ? style.pagination__itemActive : ''}`}></div>
                        <div onClick={() => slider(2)} className={`${style.pagination__item} ${activeIndex === 2 ? style.pagination__itemActive : ''}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guests