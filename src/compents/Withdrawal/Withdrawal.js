import React from 'react';
import styled from 'styled-components';
import withdrawal from "../../assets/withdrawal.png";
import Conditions from './Conditions/Conditions';
import WithdrawalInput from './WithdrawalInput/WithdrawalInput';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 150px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 300%;
  margin-bottom: 4rem;
  font-weight: bold;
  color: #253858;
`;

const Span = styled.span`
  text-align: center;
  font-size: 3rem;
  color: green;
`;

const BankSpan = styled.span`
  text-align: center;
  font-size: 1.5rem;
  color: blue;
`;

const Bankh3 = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: #253858;
`;

const Card = styled.div`
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

const Image = styled.img`
  max-width: 100%;
`;

const TextWrapper = styled.div`
  flex: 1;
  margin: 0 20px;
  text-align: center;
`;

const WithdrawalButton = styled.button`
  background-color: #008CBA;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  margin-top:1rem;

  & a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    background-color: #005D7E;
  }
`;

const Withdrawal=()=>{
    return(
        <Wrapper>
        <Heading>Withdrawal</Heading>
        <Card>
          <Image src={withdrawal} alt="your-image-alt" />
          <TextWrapper>
            <Heading>My Balance - <Span> $500.00 </Span> </Heading>
            <Bankh3>Bank Number - <BankSpan> Paytm bank </BankSpan> </Bankh3>
            <Bankh3>Ac. Number - <BankSpan> 917349303040 </BankSpan> </Bankh3>
            <Bankh3>ifsc -<BankSpan> PYTM0123456 </BankSpan> </Bankh3>
            <WithdrawalButton>
              <a href='/withdrawal/history'>Transactions</a>
            </WithdrawalButton>
          </TextWrapper>
        </Card>
        <WithdrawalInput/>
        <Conditions/>
      </Wrapper>
    )
}

export default Withdrawal