import React from "react";
import styled from 'styled-components';
import contactus from "../../assets/contactus.jpg";

const Contact = () =>{
    return(
      <>
      <Heading>Contact with us</Heading>
      <Background>
      <Container>
        <Image src={contactus} />
        <Form>
          <Label>Name</Label>
          <Input type="text" />
          <Label>Email</Label>
          <Input type="email" />
          <Label>Message</Label>
          <Textarea />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Background> 
    </>
    )
}


const Background = styled.div`
  background-color: #f2f2f2;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    height: auto;
    padding:50px;
  }
`;

const Heading = styled.h1`
    width: 100%;
    font-size: 4rem;
    color: #253858;
    text-align: center;
    padding-top: 150px;
    // background-color: #f2f2f2;
`;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 50px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #253858;
`;

const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: solid;
  margin-bottom: 10px;
  padding: 0 10px;
  
`;

const Textarea = styled.textarea`
  height: 100px;
  border-radius: 5px;
  border: solid;
  margin-bottom: 10px;
  padding: 10px;
`;

const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #253858;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export default Contact