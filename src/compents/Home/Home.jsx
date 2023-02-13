import React from "react";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Profit from "../Profit/Profit";
import Steps from "../Steps/Steps";

const Home = () =>{
    return(
        <>
            <HeroSection/>
            <Profit/>
            <Steps/>
            <Footer/>
        </>
    )
}

export default Home