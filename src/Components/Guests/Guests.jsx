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
    },
    {
        id: 2,
        pic: person2,
        name: 'Антон',
    },
    {
        id: 3,
        pic: person3,
        name: 'Анна',
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
                    <div className={style.wrap}>
                        {guests.map((guest, index) => (
                            <img
                                key={guest.id}
                                className={`${style.guests__pic} ${activeIndex === index ? style.guests__picActive : ''
                                    }`}
                                src={guest.pic}
                                alt={`person${index + 1}`}
                            />
                        ))}
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
        </div>
    )
}

export default Guests