import React,{ useState,useRef,useEffect } from "react";
import styled from 'styled-components';
import loginimg from "./../../../assets/login.png";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../../actions/userAction";
import { Navigate } from "react-router-dom";

const Signin = ({ history, location }) =>{
  const dispatch = useDispatch();

  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const loginTab = useRef(null);

  const { email, password} = formData

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      Navigate('/user-profile');
    }
  }, [dispatch, error, alert, Navigate, isAuthenticated]);


  // const handleSubmit = e => {
  //   e.preventDefault();
  //   axios.post('http://localhost:8000/api/user/login', formData)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

    return(
      <>
      <Background>
      <Container>
        <Image src={loginimg} />
        <Form onSubmit={loginSubmit} ref={loginTab}>
          <Label >Email</Label>
          <Input type="email" name="email" value={formData.email}
           onChange={handleChange} />
          <Label>Password</Label>
          <Input type="password" name="password" 
          value={formData.pas} onChange={handleChange} />
          <Button type="submit">SignIn</Button>
          <Span>
            <a href="/forgot-password"> Forgot Password? </a>
           </Span>
          <Span>Create new account
            <a href="/signup"> Sign Up </a> 
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
  padding:80px;
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

export default Signin