import styled from "styled-components";

export const SocialContainer = styled.div`
  position: relative;
  
`


export const SocialWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 3;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
`


export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -30px;
  
 
`


export const SocialLinks = styled.a`
  color: #fff;
  background-color: #2f2e41;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 17%);
  border-radius: 50%;
  margin-right: 8px;
  padding: 17px 19px;
  font-size: 1.1rem;
  overflow: hidden;
  position: relative;
  line-height: normal;

  &:hover{
    background-color: #21203a;
  }
`
