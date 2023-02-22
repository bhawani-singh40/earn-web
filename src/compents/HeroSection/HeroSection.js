import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  background-color: #f2f2f2;
  padding-top: 12rem;
  padding-bottom: 2rem;
  font-family: ui-monospace;

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

const HeroSection = (props) => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroText>{props.herotext}</HeroText>
        <HeroSubText>{props.herosubtext}</HeroSubText>
      </TextContainer>
      <HeroImage src={props.img} alt="hero image" />
    </HeroContainer>
  );
};

export default HeroSection;