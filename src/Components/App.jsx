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
import HedeMenu from './Header/HedeMenu/HedeMenu';

function App() {

    const [togle, setTogle] = useState(false)

    const Toggles = () => setTogle(togle => !togle)

    const [modal, setModal] = useState(false);

    const showModal = () => setModal(true);

    const closeModal = () => setModal(false);

    const [bookingModal, setBookingModal] = useState(false)

    const showBooking = () => setBookingModal(true)

    const closeBooking = () => setBookingModal(false)


    useEffect(() => {
        function handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight === scrollHeight) {
                showBooking()
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
            {bookingModal && <TableModal close={closeBooking} />}
            <Header delivery={showModal} openTable={showBooking} Toggles={Toggles} togle={togle} />
            {togle && <HedeMenu delivery={showModal} Toggles={Toggles} />}
            <Story />
            <Reservation onClick={showBooking} Toggles={Toggles} />
            <OurDishes />
            <OurMenu onTopPage={showModal} />
            <Guests />
            <Gallery />
            <Cookers />
            <Restaurant />
            <Footer openBooking={showBooking} />
        </>
    );
}

export default App;
