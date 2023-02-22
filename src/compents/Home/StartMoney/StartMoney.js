import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:120px 0px;
  background-color: #f2f2f2;
  font-family: ui-monospace;
`;

const Heading = styled.h1`
    width: 100%;
    font-size: 5rem;
    margin-bottom: 20px;
    color: #253858;
    text-align: center;
    font-weight: bold;
`;

const Button = styled.button`
  background-color: #157ff1;
  color: #fff;
  padding: 4px;
//   margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;

  & a {
    color: #fff;
  }
`;

const StartMoney=()=>{
    return(
        <Wrapper>
            <Heading>Start making money today.</Heading>
            <Button> Earnings </Button>
        </Wrapper>
    )
}

export default StartMoney;