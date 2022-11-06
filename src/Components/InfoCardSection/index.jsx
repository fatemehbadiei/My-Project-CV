import React,{useEffect} from "react";
import {
    InfoCardContainer,
    InfoCardWrapper,
    InfoCard,
    InfoCardFirst,
    InfoCardBody,
    IfoCardTitle,
    InfoCardP,
    InfoCardSecond,
    InfoCardDiv,
    InfoCardH4,
    InfoSectionP
} from "./InfoCardElements";
import AOS from 'aos';


const InfoCardSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
        window.addEventListener('load', AOS.refresh());
    }, []);


    return (
        <InfoCardContainer id="about">
            <InfoCardWrapper>
                <InfoCard data-aos="fade-up">
                    <InfoCardFirst>
                        <InfoCardBody>
                            <IfoCardTitle>About</IfoCardTitle>
                            <InfoCardP>Hello! I am Fatemeh Badiei. React Developer, Web Designer and JS
                                Developer.</InfoCardP>
                            <InfoCardP>I know about HTML CSS BOOTSTRAP and work with them and also I worked with Sass a
                                little.For developing I can work with JAVASCRIPT and REACT.for all of these language I
                                saw
                                courses.I started learning from 1 year ago.I create some page and website with Html Css
                                Js
                                or Html Bootstrap Css and Js and also with React. </InfoCardP>
                        </InfoCardBody>
                    </InfoCardFirst>
                    <InfoCardSecond>
                        <InfoCardBody>
                            <IfoCardTitle>Basic Information</IfoCardTitle>
                            <InfoCardDiv>
                                <InfoCardH4>Age:</InfoCardH4>
                                <InfoSectionP>26</InfoSectionP>
                            </InfoCardDiv>
                            <InfoCardDiv>
                                <InfoCardH4>Email:</InfoCardH4>
                                <InfoSectionP>fatemehbadiei1995@gmail.com</InfoSectionP>
                            </InfoCardDiv>
                            <InfoCardDiv>
                                <InfoCardH4>Phone:</InfoCardH4>
                                <InfoSectionP>+989358110186</InfoSectionP>
                            </InfoCardDiv>
                            <InfoCardDiv>
                                <InfoCardH4>Address:</InfoCardH4>
                                <InfoSectionP>Isfahan, Khane Esfahan, Gol Street</InfoSectionP>
                            </InfoCardDiv>
                            <InfoCardDiv>
                                <InfoCardH4>Language:</InfoCardH4>
                                <InfoSectionP>Persian, English</InfoSectionP>
                            </InfoCardDiv>
                        </InfoCardBody>
                    </InfoCardSecond>
                </InfoCard>
            </InfoCardWrapper>
        </InfoCardContainer>
    )
}

export default InfoCardSection;