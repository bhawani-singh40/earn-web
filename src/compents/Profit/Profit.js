import React from "react";
import styled from "styled-components";
import collect_profit from "../../assets/collect-profits.png";
import solution from "../../assets/solution.png";
import under_control from "../../assets/under-control.png";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #f0f7fd;
  padding-bottom:12rem;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

const PageHeading = styled.h1`
  font-size: 5rem;
  margin-bottom: 10rem;
  margin-top: 10rem;
  font-weight: bold;
  text-align: center;
  color: #253858;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // align-items: center;
  width: 80%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ColumnContainerReverse = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 2rem;


  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const TextContainer = styled.div`
  padding: 0 7rem;
  width: 50%;
  text-align-last: left;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
  }
`;

const Title = styled.h2`
  width: 100%;
  font-size: 15px;
  margin-bottom: 10px;
  color: #42526e;
  text-align: start;
`;

const Heading = styled.h3`
  width: 100%;
  font-size: 4rem;
  margin-bottom: 20px;
  color: #253858;
  text-align: start;
`;

const Description = styled.p`
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
  color: #323234;
  text-align: start;
`;

const ColumnImage = styled.img`
  width: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Profit = () => {
  return (
    <PageContainer>
      <PageHeading>Turn your time into profit.</PageHeading>
      <ColumnContainerReverse>
        <ColumnImage src={solution} alt="first column image" />
        <TextContainer>
          <Title>BENEFITS</Title>
          <Heading>The flexible solution.</Heading>
          <Description>
            Paidwork is a full time or additional job for all people, from every
            country. You can earn money on any device with access to the
            internet, wherever you are. You will get paid for your time spent
            and engagement on the platform.
          </Description>
        </TextContainer>
      </ColumnContainerReverse>
      <ColumnContainer>
        <TextContainer>
          <Title>HOW IT WORKS</Title>
          <Heading>Everything under control.</Heading>
          <Description>
            You can choose how you want to earn money – by playing games,
            completing surveys, watching videos, shopping online and creating
            accounts.
          </Description>
        </TextContainer>
        <ColumnImage src={collect_profit} alt="second column image" />
      </ColumnContainer>
      <ColumnContainerReverse>
        <ColumnImage src={under_control} alt="third column image" />
        <TextContainer>
          <Title>RESOURCES</Title>
          <Heading>Collect profits.</Heading>
          <Description>
            By following simple instructions, in just a month you can earn up to
            $150 (USD) – without any additional taxes or charges. However, there
            is no limit of your earnings – you decide how much you earn.
          </Description>
        </TextContainer>
      </ColumnContainerReverse>
    </PageContainer>
  );
};

export default Profit;
