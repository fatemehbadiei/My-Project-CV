import styled from "styled-components";

export const WorkContainer = styled.section`
  padding: 70px 0 0 0;
  position: relative;
  background: #fff;
`


export const WorkWrapper = styled.div`
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


export const WorkH4 = styled.h4`
  font-size: 1.4rem;
  line-height: 1.45em;
  margin-top: 30px;
  margin-bottom: 1.5rem;
  text-align: center;
`


export const WorkExperienceContainer = styled.div`
  border: 0;
  border-radius: 0.1875rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 20%);
`


export const WorkExperienceRow = styled.div`
  display: flex;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`


export const WorkDivFirst = styled.div`
  background-color: #6c63ff;
  width: 100%;
  max-width: 25%;

  @media screen and (max-width: 768px){
    max-width: 100%;
  }
`


export const WorkCardSmall = styled.div`
  min-height: 190px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding-top: 60px;
`


export const WorkCardP = styled.p`
  line-height: 1.61em;
  margin-bottom: 1rem;
  font-size: .85rem;
`


export const WorkCardH5 = styled.h5`
  font-size: 1.22rem;
  line-height: 1.4em;
  margin-bottom: 15px;
  font-weight: 500;
`


export const WorkDivSecond = styled.div`
  width: 100%;
  max-width: 75%;

  @media screen and (max-width: 768px){
    max-width: 100%;
  }
`


export const WorkCardBody = styled.div`
  padding: 1.25rem;
  min-height: 190px;
`


export const CardHeader = styled.h5`
  font-size: 1.39rem;
  line-height: 1.4em;
  margin-bottom: 15px;
  font-weight: 500;
`


export const CardBodyP = styled.p`
  line-height: 1.61em;
  margin-bottom: 1rem;
  font-size: 14px;
  //color: #2c2c2c;
`