import React,{useEffect} from "react";
import {
    ContactContainer,
    ContactImageBg,
    ContactWrapper,
    ContactInsideWrapper,
    ContactRow,
    ContactCol,
    ContactCard,
    ContactCardH4,
    ContactCardBody,
    ContactCardCol,
    ContactColBody,
    ContactForm,
    ContactFormH5,
    ContactFormDivRow,
    ContactFormDiv,
    ContactFormSpan,
    ContactFormI1,
    ContactFormI2,
    ContactFormI3,
    ContactFormInput,
    ContactFormTextarea,
    ContactFormButton,
    ContactBodyH5,
    ContactBodyP
} from "./ContactElement";
import Background from "../../Images/footer31.png"
import AOS from "aos";

const ContactSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
        window.addEventListener('load', AOS.refresh());
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <ContactContainer id="contact">
            <ContactImageBg style={{backgroundImage : `url(${Background})`}}>
                <ContactWrapper>
                    <ContactInsideWrapper>
                        <ContactRow>
                            <ContactCol>
                                <ContactCard data-aos="zoom-in">
                                    <ContactCardH4>Contact Me</ContactCardH4>
                                    <ContactCardBody>
                                        <ContactCardCol>
                                            <ContactColBody>
                                                <ContactForm onSubmit={handleSubmit}>
                                                    <ContactFormH5>Feel free to contact me</ContactFormH5>
                                                    <ContactFormDivRow>
                                                        <ContactFormDiv>
                                                            <ContactFormSpan>
                                                                <ContactFormI1/>
                                                            </ContactFormSpan>
                                                            <ContactFormInput type="text" placeholder="Name"
                                                                              required="required"/>
                                                        </ContactFormDiv>
                                                    </ContactFormDivRow>
                                                    <ContactFormDivRow>
                                                        <ContactFormDiv>
                                                            <ContactFormSpan>
                                                                <ContactFormI2/>
                                                            </ContactFormSpan>
                                                            <ContactFormInput type="text" placeholder="Subject"
                                                                              required="required"/>
                                                        </ContactFormDiv>
                                                    </ContactFormDivRow>
                                                    <ContactFormDivRow>
                                                        <ContactFormDiv>
                                                            <ContactFormSpan>
                                                                <ContactFormI3/>
                                                            </ContactFormSpan>
                                                            <ContactFormInput type="email" placeholder="E-mail"
                                                                              required="required"/>
                                                        </ContactFormDiv>
                                                    </ContactFormDivRow>
                                                    <ContactFormDivRow>
                                                            <ContactFormTextarea type="text" placeholder="Your Message"
                                                                                 required="required"></ContactFormTextarea>
                                                    </ContactFormDivRow>
                                                    <ContactFormDivRow>
                                                        <ContactFormDiv>
                                                            <ContactFormButton type="submit">Send</ContactFormButton>
                                                        </ContactFormDiv>
                                                    </ContactFormDivRow>
                                                </ContactForm>
                                            </ContactColBody>
                                        </ContactCardCol>
                                        <ContactCardCol>
                                            <ContactColBody>
                                                <ContactBodyH5>Address</ContactBodyH5>
                                                <ContactBodyP>Isfahan, Khane Esfahan, Gol Street</ContactBodyP>
                                                <ContactBodyH5>Phone</ContactBodyH5>
                                                <ContactBodyP>+989358110186</ContactBodyP>
                                                <ContactBodyH5>Email</ContactBodyH5>
                                                <ContactBodyP>fatemehbadiei1995@gmail.com</ContactBodyP>
                                            </ContactColBody>
                                        </ContactCardCol>
                                    </ContactCardBody>
                                </ContactCard>
                            </ContactCol>
                        </ContactRow>
                    </ContactInsideWrapper>
                </ContactWrapper>
            </ContactImageBg>
        </ContactContainer>
    )
}

export default ContactSection;