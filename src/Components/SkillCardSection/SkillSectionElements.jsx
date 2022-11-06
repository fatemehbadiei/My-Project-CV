import styled from "styled-components";

export const SkillCardContainer = styled.section`
  padding: 70px 0 0 0;
  position: relative;
  background: #fff;
`


export const SkillCardWrapper = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: 992px){
    max-width: 720px;
  }

  @media screen and (max-width: 768px){
    max-width: 540px;
  }
`


export const SkillCardH4 = styled.h4`
  font-size: 1.4rem;
  line-height: 1.45em;
  margin-top: 30px;
  margin-bottom: 1.5rem;
  text-align: center;
`


export const SkillCard = styled.div`
  border: 0;
  border-radius: .1875rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 20%);
`


export const SkillCardBody = styled.div`
  padding: 1.25rem;
`


export const SkillCardRow = styled.div`
  display: flex;
  

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`


export const SkillCardLang = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;

  @media screen and (max-width: 768px){
    max-width: 100%;
  }
`


export const SkillLangContainer = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  position: relative;
`


export const SkillCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`


export const SkillCardSpan = styled.span`
  color: #6c63ff;
  text-transform: uppercase;
  font-size: 1rem;
`


export const SkillCardDivProgress = styled.div`
  position: relative;
  background: rgba(55,97,140,.4);
  height: 5px;
  margin-top: 14px;
  
  
`


export const SkillCardProgress1 = styled.div`
  position: absolute;
  background: #6c63ff;
  width: 80%;
  height: 5px;
  transform: ${({scrollNav}) => (scrollNav) ? "scaleX(1)" : "scaleX(0)"};
  transition: transform 2s ease-in-out;
  transform-origin: 0% 0%;
`


export const SkillCardProgress2 = styled.div`
  position: absolute;
  background: #6c63ff;
  width: 85%;
  height: 5px;
  transform: ${({scrollNav}) => (scrollNav) ? "scaleX(1)" : "scaleX(0)"};
  transition: transform 2s ease-in-out;
  transform-origin: 0% 0%;
`


export const SkillCardProgress3 = styled.div`
  position: absolute;
  background: #6c63ff;
  width: 80%;
  height: 5px;
  transform: ${({scrollNav}) => (scrollNav) ? "scaleX(1)" : "scaleX(0)"};
  transition: transform 2s ease-in-out;
  transform-origin: 0% 0%;
`


export const SkillCardProgress4 = styled.div`
  position: absolute;
  background: #6c63ff;
  width: 70%;
  height: 5px;
  transform: ${({scrollNav}) => (scrollNav) ? "scaleX(1)" : "scaleX(0)"};
  transition: transform 2s ease-in-out;
  transform-origin: 0% 0%;
`


export const SkillCardProgress5 = styled.div`
  position: absolute;
  background: #6c63ff;
  width: 85%;
  height: 5px;
  transform: ${({scrollNav}) => (scrollNav) ? "scaleX(1)" : "scaleX(0)"};
  transition: transform 2s ease-in-out;
  transform-origin: 0% 0%;
`



export const SkillCardProgress6 = styled.div`
  position: absolute;
  background: #6c63ff;
  width: 70%;
  height: 5px;
  transform: ${({scrollNav}) => (scrollNav) ? "scaleX(1)" : "scaleX(0)"};
  transition: transform 2s ease-in-out;
  transform-origin: 0% 0%;
`
