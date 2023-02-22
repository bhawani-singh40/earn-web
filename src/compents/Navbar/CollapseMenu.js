import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>Home</a></li>
          <li><a href="/earnings" onClick={props.handleNavbar}>Earnings</a></li>
          <li><a href="/contact" onClick={props.handleNavbar}>CONTACT US</a></li>
          <li></li>
        </NavLinks>
        <Button><a href="/signin">Sign In</a></Button>
        <Button><a href="/signup">Registraction</a></Button>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #fff;
  position: fixed;
  top: 11rem;
  left: 0;
  right: 0;
  height:100vh;
  margin-left:50px;
  font-family: ui-monospace;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 3rem 2rem 3rem 4rem;
  margin-bottom:45%;

  & li {
    transition: all 300ms linear 0s;
    border-bottom: solid;
    border-bottom-color: #848484;
  }

  & a {
    font-size: 2.4rem;
    line-height: 3;
    color: #848484;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

const Button = styled.button`
  background-color: #157ff1;
  color: #fff;
  padding: 14px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
`;