import React from "react"
import '../main.css'
import Header from "./Header/Header.jsx";
import Story from "./Story/Story.jsx";
import Reservation from "./Reservation/Reservation.jsx";
import OurDishes from "./ourDishes/OurDishes.jsx";
import OurMenu from "./ourMenu /OurMenu.jsx";
import Guests from "./Guests /Guests.jsx";
import Gallery from "./Gallery /Gallery.jsx";
import Cookers from "./Cookers /Cookers.jsx";
import Restaurant from "./Restaurant /Restaurant.jsx";
import Footer from "./Footer/Footer.jsx";
function App() {
  return (
    <div className='container'>
      <Header/>
      <Story/>
      <Reservation/>
      <OurDishes/>
      <OurMenu/>
      <Guests/>
      <Gallery/>
      <Cookers/>
      <Restaurant/>
      <Footer/>
    </div>
  )
}

export default App
