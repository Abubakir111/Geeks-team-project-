import React, { useState, useEffect } from 'react';
import '../main.css'
import Header from "./Header/Header.jsx";
import Story from "./Story/Story.jsx";
import Reservation from "./Reservation/Reservation";
import OurDishes from "./ourDishes/OurDishes";
import OurMenu from "./ourMenu/OurMenu";
import Guests from "./Guests/Guests.jsx";
import Gallery from "./Gallery/Gallery";
import Cookers from "./Cookers/Cookers";
import Restaurant from "./Restaurant/Restaurant";
import Footer from "./Footer/Footer";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import TableModal from "./TableModal/TableModal.jsx";
import AnswerModal from "./TableModal/AnswerModal/AnswerModal.jsx";


function App() {

    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    const [bookingModal, setBookingModal] = useState(false)
    const showBooking = () => {
        setBookingModal(true)
    }
    const closeBooking = () => {
        console.log(1)
        setBookingModal(false)
    }

    useEffect(() => {
        function handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight === scrollHeight) {
                showBooking()
                console.log('Достигнут низ страницы!');
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            {modal && <ShoppingCart close={closeModal} />}
            {/*{modal && <AnswerModal close={closeModal}/>}*/}
            {bookingModal && <TableModal close={closeBooking}/>}
            <Header delivery={showModal} openTable={showBooking} />
            <Story />
            <Reservation onClick={showBooking}/>
            <OurDishes />
            <OurMenu />
            <Guests />
            <Gallery />
            <Cookers />
            <Restaurant />
            <Footer openBooking={showBooking}/>
        </>
    );
}

export default App;
