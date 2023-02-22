import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Userlogo from "../../assets/userlogo.png";

const UserLogo = () => {
  const navigate = useNavigate();
  return (
    <Image src={Userlogo} alt="Company Logo" onClick={()=>{navigate('/user-profile')}} />
  )
}

export default UserLogo;

const Image = styled.img`
  height: 65%;
  margin-top: 2.3rem;
  margin-inline-start: auto;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 55%;
  }
`;