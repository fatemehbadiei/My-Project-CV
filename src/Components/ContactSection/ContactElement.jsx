import styled from "styled-components";
import {FaUserCircle, FaFileAlt, FaEnvelope} from "react-icons/fa";

export const ContactContainer = styled.section`
  padding: 70px 0 0 0;
  position: relative;
  background: #fff;
`


export const ContactImageBg = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  height: 100%;

`


export const ContactWrapper = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    max-width: 960px;
  }

  @media screen and (max-width: 992px) {
    max-width: 720px;
  }

  @media screen and (max-width: 768px) {
    max-width: 540px;
  }
`


export const ContactInsideWrapper = styled.div`
  padding: 8% 0;
`


export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export const ContactCol = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 75%;

  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
`


export const ContactCard = styled.div`
  border: 0;
  border-radius: 0.1875rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 20%);
  background-color: #fff;
`


export const ContactCardH4 = styled.h4`
  font-size: 1.4rem;
  line-height: 1.45em;
  margin-top: 30px;
  margin-bottom: 1.5rem;
  text-align: center;
`


export const ContactCardBody = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`


export const ContactCardCol = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;

  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
`


export const ContactColBody = styled.div`
  padding: 1.25rem;
  min-height: 190px;
`


export const ContactForm = styled.form`

`


export const ContactFormH5 = styled.h5`
  padding-bottom: 1rem;
  margin-left: 2px;
`


export const ContactFormDivRow = styled.div`
  display: flex;
  margin-bottom: 1rem;
`


export const ContactFormDiv = styled.div`
  max-width: 100%;
  flex-grow: 1;
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`


export const ContactFormSpan = styled.span`
  padding: 7px 0 8px 18px;
  background-color: #FFFFFF;
  border: 1px solid #E3E3E3;
  color: #2f2e41;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  border-radius: 30px 0 0 30px;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  border-right: 0 none;
  display: flex;
  align-items: center;
  
  
`


export const ContactFormI1 = styled(FaUserCircle)`
  width: 17px;
`


export const ContactFormI2 = styled(FaFileAlt)`
  width: 17px;
`


export const ContactFormI3 = styled(FaEnvelope)`
  width: 17px;
`


export const ContactFormInput = styled.input`
  padding: 7px 30px 8px 15px;
  background-color: transparent;
  border: 1px solid #E3E3E3;
  border-radius: 0 30px 30px 0;
  color: #2f2e41;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  box-shadow: none;
  border-left: 0 none;
  display: flex;
  align-items: center;
  outline: none;
  background-image: none !important;
  
`


export const ContactFormTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 7px 65px 8px 15px;
  max-width: 100%;
  resize: none;
  border: none;
  border-bottom: 1px solid #E3E3E3;
  border-radius: 0;
  line-height: 2;
  background-color: transparent;
  color: #2f2e41;
  font-size: 0.8571em;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  box-shadow: none;
  outline: none;
`


export const ContactFormButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  font-weight: 400;
  font-size: 0.8571em;
  line-height: 1.35em;
  margin: 5px 1px;
  border: none;
  border-radius: 0.1875rem;
  padding: 11px 22px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 8px 0 rgb(0 0 0 / 17%);
    background: #5a53c3;
  }
`


export const ContactBodyH5 = styled.h5`

`


export const ContactBodyP = styled.p`
  padding-bottom: .5rem;
  margin-bottom: 1rem;
  line-height: 1.61em;
  font-size: 14px;
  margin-top: 4px;
`