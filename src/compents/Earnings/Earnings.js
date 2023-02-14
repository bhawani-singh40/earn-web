import HeroSection from "../HeroSection/HeroSection"
import earning1 from "../../assets/earning1.png";
import Card from "../Card/Card";
import earn_money from "../../assets/make-money-online.png";
import Balance from "../Balance/Balance";

const Earnings=()=>{
    return(
        <>
         <HeroSection
            herotext="Earn Free Talktime & Get Rewards"
            herosubtext="Download APK & start earning NOW!"
            img={earning1} 
         />
         <Balance/>
         <Card
          image={earn_money}
          title="phone pay"
          subtitle="10rs"
         />
         <Card
          image={earn_money}
          title="phone pay"
          subtitle="10rs"
         />
         <Card
          image={earn_money}
          title="phone pay"
          subtitle="10rs"
         />
         <Card
          image={earn_money}
          title="phone pay"
          subtitle="10rs"
         />
         <Card
          image={earn_money}
          title="phone pay"
          subtitle="10rs"
         />
        </>
    )
}

export default Earnings