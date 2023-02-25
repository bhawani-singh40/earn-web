import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 150px;
  font-family: ui-monospace;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 34px;
  padding: 16px;
  margin: 56px;
  background:#f8f9fa;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
   
  @media (max-width: 768px) {
    margin: 15px -8px;
  }
`;

const TextContainer = styled.div`
  flex-basis: 60%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align-last: center;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 300%;
  margin-bottom: 4rem;
  font-weight: bold;
  color: #253858;
`;

const Title = styled.h2`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #253858;
  text-align-last: start;
`;

const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
  color:green;
  justify-content: center;
  text-align-last: start;
`;

const Money = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color:green;
`;

const History=()=>{
    return(
        <Wrapper>
            <Heading>Transaction Record</Heading>
        <CardContainer>
          <TextContainer>
            <Title>Withdrawal Success</Title>
          <SubTitle>2023-02-14 16:37:59</SubTitle>
          </TextContainer>
          <Money>$150</Money>
        </CardContainer>
        <CardContainer>
          <TextContainer>
            <Title>Withdrawal Success</Title>
          <SubTitle>2023-02-14 16:37:59</SubTitle>
          </TextContainer>
          <Money>$150</Money>
        </CardContainer>
        <CardContainer>
          <TextContainer>
            <Title>Withdrawal Success</Title>
          <SubTitle>2023-02-14 16:37:59</SubTitle>
          </TextContainer>
          <Money>$150</Money>
        </CardContainer>
        </Wrapper>
    )
}

export default History;