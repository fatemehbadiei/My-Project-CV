import styled from "styled-components";
import {AiOutlineBars} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav) ? "#2f2e41" : "transparent"};
  box-shadow: ${({scrollNav}) => (scrollNav) ? "0 0 20px rgba(0,0,0,.15)" : "none"};
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  top: 0;
  z-index: 10;
  position: sticky;
`


export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

`


export const NavHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  transform: ${({isOpen}) => (isOpen ? "translate3d(-270px, 0, 0)" : "0")};
  transition: ${({isOpen}) => (isOpen ? ".8s ease" : ".8s ease")};
`


export const NavLogo = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: all .3s ease-in-out;
    color: #6c63ff;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    position: absolute;
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
  }
`


export const MenuIcon = styled(AiOutlineBars)`
  display: ${({isOpen}) => (isOpen ? "none" : "block")};
`


export const CloseIcon = styled(AiOutlineClose)`
  display: ${({isOpen}) => (isOpen ? "block" : "none")};
  
`


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

`


export const NavItem = styled.li`
  margin-right: 5px;
`


export const NavLink = styled(LinkS)`
  text-transform: uppercase;
  font-size: .814rem;
  padding: 0.5rem 0.7rem;
  line-height: 1.625rem;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    transition: all .3s ease-in-out;
    background-color: #6c63ff;
    border-radius: 5px;
  }

  &.active {
    background-color: #6c63ff;
    border-radius: 5px;
  }
`


export const NavLink1 = styled(LinkR)`
  text-transform: uppercase;
  font-size: .814rem;
  padding: 0.5rem 0.7rem;
  line-height: 1.625rem;
  cursor: pointer;
  transition: all .3s ease-in-out;
  text-decoration: none;
  color: #fff;

  &:hover {
    transition: all .3s ease-in-out;
    background-color: #6c63ff;
    border-radius: 5px;
  }

  &.active {
    background-color: #6c63ff;
    border-radius: 5px;
  }
`

export const NavBtn = styled.div`
 
`

export const Button = styled(LinkR)`
  background-color: #6c63ff;
  font-weight: 400;
  font-size: .814rem;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  outline: none;
  transition: all .2s ease-in-out;
  color: #fff;
  text-decoration: none;
  line-height: 1.625rem;

  &:hover{
    transition: all .2s ease-in-out;
    background: #5a53c3;
  }
`