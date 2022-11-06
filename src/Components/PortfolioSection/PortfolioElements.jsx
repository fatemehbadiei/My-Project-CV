import styled from "styled-components";
import {FaLaptopCode, FaJava, FaBootstrap} from "react-icons/fa";


export const PortfolioContainer = styled.section`
  padding: 70px 0 0 0;
  position: relative;
  background: #fff;
`


export const PortfolioWrapper = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;

  @media screen and (max-width: 1200px){
    max-width: 960px;
  }
  
  @media screen and (max-width: 992px){
    max-width: 720px;
  }

  @media screen and (max-width: 768px){
    max-width: 540px;
  }
`


export const PortfolioRow = styled.div`
  display: flex;
`


export const PortfolioCol = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;
`


export const PortfolioH4 = styled.h4`
  font-size: 1.4rem;
  line-height: 1.45em;
  margin-top: 30px;
  margin-bottom: 1.5rem;
  text-align: center;
`


export const PortfolioNav = styled.nav`
  text-align: center;
`


export const PortfolioUl = styled.ul`
  display: inline-flex;
  list-style: none;
  padding: 0;
  margin: 0;
`


export const PortfolioLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`


export const PortFolioLink = styled.a`
  background-color: ${({isActive}) => (isActive ? " #6c63ff" : " rgba(222,222,222,.3)")};
  color: ${({isActive}) => (isActive ? " #fff" : " #9a9a9a")};
  box-shadow: ${({isActive}) => (isActive ? " 0 5px 35px 0 rgb(0 0 0 / 30%)" : " none")};
  padding: 19px 20px;
  text-align: center;
  font-weight: 400;
  margin-right: 19px;
  border-radius: 50%;
  cursor:pointer;
  
`

export const Icon1 = styled(FaLaptopCode)`
  font-size: 25px;
  line-height: 60px;
`

export const Icon2 = styled(FaJava)`
  font-size: 25px;
  line-height: 60px;
`


export const Icon3 = styled(FaBootstrap)`
  font-size: 25px;
  line-height: 60px;
`


export const PortfolioTabs = styled.div`
  margin-top: 3rem;
`


export const PortfolioTabOne = styled.div`

`


export const PortfolioTabTwo = styled.div`

`


export const PortfolioTabThree = styled.div`

`


export const PortfolioTabWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
`


export const PortfolioTabRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`


export const PortfolioTabCol1 = styled.div`
  display: flex;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`


export const PortfolioTabCol2 = styled.div`
  display: flex;
  
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`


export const PortfolioTabDiv = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;

  @media screen and (max-width: 768px){
    max-width: 100%;
  }
`

export const PortfolioTabLink = styled.a`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
  transition: all .4s ease-in-out;
  

  &:hover{
    transition: all .4s ease-in-out;
    transform: scale(.98,.98);
  }
  
  &:hover div{
    display: flex;
    transition: all 1s ease-in-out;
  }
  
  &:hover img{
    transition: all .4s ease-in-out;
  }
  
`

export const PortFolioTabImg = styled.img`
  width: 100%;
  max-width: 540px;
  height: 100%;
  max-height: 353px;
  transition: all .4s ease-in-out;
  
`

export const PortfolioCaption = styled.div`
  display:none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 10px;
  bottom: 10px;
  right: 10px;
  left: 10px;
  position: absolute;
  z-index: 1;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  transition: transform 1s ease-in-out;
`

export const CaptionH4 = styled.h4`
  font-size: 1.4rem;
  line-height: 1.45em;
  text-align: center;
  font-weight: 500;
  margin-bottom: 10px;
  
`

export const CaptionP = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 7px 0;
  font-size: 12px;
  
`