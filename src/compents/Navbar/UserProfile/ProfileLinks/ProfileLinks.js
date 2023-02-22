import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 34px;
  padding: 16px;
  margin: 6px;
  background:#f8f9fa;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;
   
  @media (max-width: 768px) {
    margin: -6px;
  }
`;

const TextContainer = styled.div`
  flex-basis: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align-last: center;
`;

const Title = styled.h2`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #253858;
  text-align-last: start;
`;

const Sign = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color:green;
`;

const Icon = styled.span`
font-size: 4rem;
margin-right:1rem;
`

const ProfileLink=(props)=>{
    const navigate = useNavigate()
    console.log(props.url)
    return(
        <Wrapper>
        <CardContainer onClick={()=> navigate(props.url)} >
          <TextContainer>
            <Title><Icon>< props.icon /></Icon>{props.title}</Title>
          </TextContainer>
          <Sign>></Sign>
        </CardContainer>
        </Wrapper>
    )
}

export default ProfileLink