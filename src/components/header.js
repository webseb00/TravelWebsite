import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { MenuData } from '../data/MenuData';
import { Button } from './Button';

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLOREIX</NavLink>
      <Bars />
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavLink key={index} to={item.link}>{item.title}</NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          primary="true"
          round="true"
          to="/trips"
        >
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative;
  padding: 0.5rem;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    transform: translate(-100%, 75%);
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Header
