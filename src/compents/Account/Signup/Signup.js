import React, { useState ,useRef,} from "react";
import styled from 'styled-components';
import signup from "./../../../assets/signup.png";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../../actions/userAction";


const Signup = ({ history, location }) =>{
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user/register', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

    return(
      <>
      <Background>
      <Container>
        <Image src={signup} />
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input type="text" name="name"  onChange={handleChange} value={formData.name}/>
          <Label>Number</Label>
          <Input type="text" name="number"  onChange={handleChange} value={formData.number}/>
          <Label>Email</Label>
          <Input type="email" name="email"  onChange={handleChange} value={formData.email}/>
          <Label>Password</Label>
          <Input type="password" name="password"  onChange={handleChange} value={formData.password}/>
          <Label>Confirm Password</Label>
          <Input type="password" name="password_confirmation" onChange={handleChange} value={formData.password_confirmation}/>
          <Button type="submit">Sign Up</Button>
          <Span>Already have account?
            <a href="/signin"> Sign In </a> 
          </Span>
          <Span>
            <a href="/search-account"> Forgot Password ? </a> 
          </Span>
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
  padding-top: 140px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    height: auto;
    padding:30px;
    padding-top: 140px;
  }
`;

const Span = styled.span`
    width: 100%;
    font-size: 1.3rem;
    color: blue;
    // text-align: center;
    padding-top: 20px;
    // background-color: #f2f2f2;

    & a {
        color: #848484;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
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

export default Signup