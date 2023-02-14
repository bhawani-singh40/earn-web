import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  max-width: 600px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px 0;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
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

  &:hover {
    background-color: #005D7E;
  }
`;

const WithdrawalInput=()=>{
    return(
        <>
        <CardContainer>
        <InputContainer>
            <InputField placeholder="Enter your response here" />
            <WithdrawalButton>Withdrawal</WithdrawalButton>
        </InputContainer>
        </CardContainer>
        </>
    )
}

export default WithdrawalInput