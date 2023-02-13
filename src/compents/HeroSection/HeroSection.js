import React from 'react';
import styled from 'styled-components';
import earn_money from "../../assets/make-money-online.png";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  background-color: #f2f2f2;
  padding-top: 18rem;
  padding-bottom: 13rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextContainer = styled.div`
  padding: 0 2rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    margin-top: 10rem;
    margin-bottom: -8rem;
  }
`;

const HeroText = styled.h1`
  font-size: 5rem;
  margin-bottom: 4rem;
  margin-left: 3rem;
  font-weight: bold;
  color: #253858;
`;

const HeroSubText = styled.p`
  font-size: 2.5rem;
  margin-bottom: 6rem;
  font-weight: lighter;
  margin-left: 3rem;
  color: #323234;
`;

const HeroImage = styled.img`
  width: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 10rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroText>Make money online.</HeroText>
        <HeroSubText>On the phone, computer or tablet, get paid wherever you are, without investment.</HeroSubText>
      </TextContainer>
      <HeroImage src={earn_money} alt="hero image" />
    </HeroContainer>
  );
};

export default HeroSection;