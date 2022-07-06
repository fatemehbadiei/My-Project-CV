import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const HeroContainer = styled.div`
  background-color: #2f2e41;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  height:584px;
  text-align: center;

  :before {
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, .4) 0%, rgba(0, 0, 0, .8) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, .4) 0%, transparent 100%);
    z-index: 2;
  }
`


export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`


export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`


export const HeroContent = styled.div`
  z-index: 3;
  padding: 0 15px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  width: 100%;
  max-width: 880px;
  margin-top: -30px;
  
`


export const HeroProfile = styled(LinkR)`
  transition: .3s ease-out;
  &:hover{
    transition: .3s ease-out;
    transform: scale(1.05);
  }
`


export const ImgProfile = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  
`


export const HeroH1 = styled.h1`
  margin-top: 30px;
  font-weight: 700;
  font-size: 1.9rem;
  margin-bottom: 20px;
  opacity: .9;
`


export const HeroP = styled.p`
  margin-bottom: 22px;
  font-weight: 400;
  font-size: 14px;
  max-width: 440px;
  opacity: .9;
`


export const HeroBtnWrapper = styled.div`
  
`


export const Button = styled(LinkS)`
  background-color: #6c63ff;
  font-weight: 400;
  font-size: 0.8571em;
  line-height: 1.35em;
  margin: 5px 1px;
  border: none;
  border-radius: 5px;
  padding: 11px 45px;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;


  &:hover{
    transition: all .2s ease-in-out;
    background: #5a53c3;
  }
`