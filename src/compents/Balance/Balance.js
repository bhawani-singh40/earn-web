import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: #f0f7fd;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 34px;
  padding: 16px;
  margin: 66px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  font-family: ui-monospace;
   
  @media (max-width: 768px) {
    margin: 20px;
    flex-direction: column;
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

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #253858;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
  color:green;
`;

const Dec = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
  color:blue;
`;

const Button = styled.button`
  color: #253858;
  padding: 14px 20px;
  margin: 8px 0;
  border: 2px solid #ccc;
  border-radius: 34px;
  cursor: pointer;
  width: 50%
  
  align-self: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  & a {
    color: green;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

const Balance = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Available Balance</Title>
        <SubTitle>$2000.00</SubTitle>
        <Dec>+200.00 Today</Dec>
      </TextContainer>
      <TextContainer>
        <Button>
            <a href="/withdrawal">Withdrawal</a>
        </Button>
      </TextContainer>
    </Container>
  );
};

export default Balance;