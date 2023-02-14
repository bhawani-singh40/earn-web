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
  font-size: 300%;
  margin-bottom: 4rem;
  font-weight: bold;
  color: #253858;
`;

const ConditionText = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: #253858;
`;

const Conditions=()=>{
    return(
        <ConditionCard>
            <Heading>Privacy And Conditions</Heading>
            <ConditionText>
                1.Minimum withdrawal is 150 Rs.
                2.Withdrawal time is 10:00-18:00.
                3.Withdrawal available once per day.
                4.Withdrawal tax:
                The withdrawal amount below 5000 Rs charge 10% tax.
                The withdrawal amount above 5000 Rs charge 8% tax.
                5.If withdrawal failed, please check your bank account information is correct.
                6. Withdrawal will arrive in your account within 12 hours
            </ConditionText>
        </ConditionCard>
    )
}

export default Conditions