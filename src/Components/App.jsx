import React from "react"
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
function App() {
    return (
        <>
            <Header />
            <Story />
            <Reservation />
            <OurDishes />
            <OurMenu />
            <Guests />
            <Gallery />
            <Cookers />
            <Restaurant />
            <Footer />
        </>
    )
}

export default App
