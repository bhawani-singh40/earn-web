import React from 'react';
import styled from 'styled-components';
import Userlogo from "../../../assets/userlogo.png";
import ProfileLink from './ProfileLinks/ProfileLinks';
import { RiBankFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiHomeHeartLine } from "react-icons/ri";
import { RiUserShared2Fill } from "react-icons/ri";

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    display: block;
    align-items: center;
    padding: 20px;
    margin: 20px auto;
    border: 2px solid #ccc;
    background-color: #f2f2f2;
    border-radius: 30px;
    text-align: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    margin-top:170px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 50%;
  align-items: center;
  margin-top:-4rem;
`;

const Username = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
`;

const UserProfile = () => {
    return (
        <>
      <Container>
        <Image src={Userlogo} alt="Profile" />
        <Username>Bhawani Singh</Username>
      </Container>
       <ProfileLink
        title = "Bank Card"
        icon={RiBankFill}
        url="/bank-card"
       />

       <ProfileLink
        title = "Help"
        icon={RiCustomerService2Fill}
        url="/contact"
       />
       <ProfileLink
        title = "About Us"
        icon={RiHomeHeartLine}
        url="/"
       />
       <ProfileLink
        title = "Sign Out"
        icon={RiUserShared2Fill}
        url="/signin"
       />

        </>
    );
  };
  
  export default UserProfile;