import styled from "styled-components";

export const InfoCardContainer = styled.section`
  padding: 70px 0 0 0;
  position: relative;
  background: #fff;
`


export const InfoCardWrapper = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;

  @media screen and (max-width: 992px){
    max-width: 720px;
  }

  @media screen and (max-width: 768px){
    max-width: 540px;
  }
`


export const InfoCard = styled.div`
  border: 0;
  border-radius: .1875rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 20%);
  display: flex;
  
  
  @media screen and (max-width: 992px){
    flex-direction: column;
  }
`


export const InfoCardFirst = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  width: 50%;
  
  @media screen and (max-width: 992px){
    width: 100%;
  }
`


export const InfoCardBody = styled.div`
  padding: 1.25rem;
`


export const IfoCardTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.45em;
  margin-bottom: 15px;
  font-weight: 700;
`


export const InfoCardP = styled.p`
  margin-bottom: 1rem;
  line-height: 1.61em;
  font-size: 14px;
  //color: #2c2c2c;
`



export const InfoCardSecond = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  width: 50%;
  

  @media screen and (max-width: 992px){
    width: 100%;
  }
`


export const InfoCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px){
    flex-direction: column;
  }
`


export const InfoCardH4 = styled.h4`
  text-transform: uppercase;
  font-size: 12px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 33.33%;
`


export const InfoSectionP = styled.p`
  padding-right: 15px;
  padding-left: 15px;
  line-height: 1.61em;
  font-size: 14px;
  //color: #2c2c2c;
  max-width: 66.66%;
  display: flex;
  flex: auto;
`