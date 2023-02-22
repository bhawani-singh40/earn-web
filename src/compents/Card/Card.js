import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 34px;
  padding: 16px;
  margin: 66px;
  background:#f8f9fa;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  font-family: ui-monospace;
   
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const ImageContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
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

const Button = styled.button`
  color: #253858;
  padding: 14px 20px;
  margin: 8px 0;
  border: 2px solid #ccc;
  border-radius: 34px;
  cursor: pointer;
  width: 50%
  font-size: 16px;
  align-self: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  & a {
    color: #253858;
    text-transform: uppercase;
    font-weight: 1000;
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

const Card = ({image, title, subtitle}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Button>
            <a href="/">Install</a>
        </Button>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;