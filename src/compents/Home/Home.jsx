import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Profit from "../Profit/Profit";
import Steps from "../Steps/Steps";
import earn_money from "../../assets/make-money-online.svg";
import StartMoney from "./StartMoney/StartMoney";

const Home = () =>{
    return(
        <>
            <HeroSection 
             herotext="Make money online."
             herosubtext="On the phone, computer or tablet, get paid wherever you are, without investment."
             img={earn_money} 
            />
            <Profit/>
            <Steps/>
            <StartMoney/>
        </>
    )
}

export default Home