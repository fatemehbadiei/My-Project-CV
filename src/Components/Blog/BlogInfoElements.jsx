import styled from "styled-components";
import {Link} from "react-router-dom";

export const InfoContainer =styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? "#f9f9f9" : "#2f2e41")};
  
  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const Icon =styled(Link)`
  position: absolute;
  left: 3%;
  top: 2%;
  color: #fff;
  font-weight: 700;
  font-size: 30px;

  &:hover {
    transition: all .3s ease-in-out;
    color: #6c63ff;
  }
  
`

export const InfoWrapper =styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow =styled.div`
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};
  
  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `"col2" "col1"` : `"col1" "col2"`)};
  }
`

export const Column1 =styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const TextWrapper =styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine =styled.p`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-weight: 700;
  color: #6c63ff;
  margin-bottom: 16px;
  
`

export const Heading =styled.h2`
  margin-bottom: 24px;
  font-size: 46px;
  line-height: 1.1;
  font-weight: 700;
  color:${({lightBg}) => (lightBg ? "#2f2e41" : "#f7f8fa")} ;
  
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const Subtitle =styled.p`
  max-width: 440px;
  font-size: 18px;
  margin-bottom: 35px;
  color:${({lightBg}) => (lightBg ? "#2f2e41" : "#f7f8fa")} ;
`


export const BtnWrapper =styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Column2 =styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const ImgWrap =styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img =styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 768px){
    max-height: 400px;
  }
`