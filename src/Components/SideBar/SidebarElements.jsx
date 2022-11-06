import styled from "styled-components";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100% !important;
  width: 300px;
  z-index: 1032;
  background: linear-gradient(#6c63ff 0%, #2f2e41 80%);
  text-align: left;
  max-height: none !important;
  transition: 0.8s ease;
  opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
  right: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`


export const SidebarWrapper = styled.div`
  color: #fff;
`


export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  list-style: none;
`


export const SidebarLink = styled(LinkS)`
  text-transform: uppercase;
  margin: .312rem 1rem 0 ;
  font-size: .814rem;
  padding: 0.5rem 0.7rem;
  line-height: 1.625rem;
  cursor: pointer;
  
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`


export const SidebarLinkR = styled(LinkR)`
  text-transform: uppercase;
  margin: .312rem 1rem 0 ;
  font-size: .814rem;
  padding: 0.5rem 0.7rem;
  line-height: 1.625rem;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`

