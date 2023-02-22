import React from "react";
import styled from 'styled-components';
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:20px;
  font-family: ui-monospace;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  flex-basis: calc(33.33% - 20px);
  margin: 10px;
  text-align: center;

  @media screen and (max-width: 767px) {
    flex-basis: calc(100% - 20px);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Text = styled.h2`
width: 100%;
font-size: 2rem;
margin-bottom: 10px;
color: #253858;
`;

const SubText = styled.p`
    width: 100%;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    text-transform: none;
    line-height: 25px;
    letter-spacing: 0px;
    color: #8b8b8b;
`;

const Heading = styled.h1`
    width: 100%;
    font-size: 4rem;
    margin-bottom: 20px;
    color: #253858;
    text-align: center;
`;


const Steps = () => {
  return (
    <>
      <Wrapper>
      <Heading>Simple Steps, Easy Money</Heading>
      <Container>
        <ImageWrapper>
          <Image src={step1} />
          <Text>1: Open Platform Link</Text>
          <SubText>Sign into our access platform with provided login from us.</SubText>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={step2} />
          <Text>2: Follow Our Steps</Text>
          <SubText>Simple and easy steps, just need to follow step by step.</SubText>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={step3} />
          <Text>3: Use Mobile Device</Text>
          <SubText>Work via mobile device and earn your income.</SubText>
        </ImageWrapper>
      </Container>
    </Wrapper>
    </>
  );
};

export default Steps