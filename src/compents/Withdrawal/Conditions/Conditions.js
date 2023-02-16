import React from 'react';
import styled from 'styled-components';

const ConditionCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px 0;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 350%;
  margin-bottom: 4rem;
  font-weight: bold;
  color: #253858;
`;

const ConditionText = styled.h3`
  text-align: center;
  font-size: 2rem;
  color: #253858;
  text-align: start;
`;

const Span = styled.span`
  text-align: center;
  font-size: 2rem;
  color: green;
`;

const Conditions=()=>{
    return(
    <ConditionCard>
        <Heading>Privacy And Conditions</Heading>
        <ConditionText>
            <Span>1.</Span>Minimum withdrawal is 150 Rs. <br/>
            <Span>2.</Span>Withdrawal time is 10:00-18:00.<br/>
            <Span>3.</Span>Withdrawal available once per day.<br/>
            <Span>4.</Span>Withdrawal tax: <br/>
            The withdrawal amount below 5000 Rs charge 10% tax.<br/>
            The withdrawal amount above 5000 Rs charge 8% tax.<br/>
            <Span>5.</Span>If withdrawal failed, please check your bank account information is correct.<br/>
            <Span>6.</Span> Withdrawal will arrive in your account within 12 hours<br/>
        </ConditionText>
    </ConditionCard>
    )
}

export default Conditions