import React from "react";
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroProfile,
    ImgProfile,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    Button
} from "./HeroElements";

import Image from "../../Images/hero1.png";
import Profile from "../../Images/me1.jpg";

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Image}/>
            </HeroBg>
            <HeroContent>
                <HeroProfile to="/">
                    <ImgProfile src={Profile}/>
                </HeroProfile>
                <HeroH1>Fatemeh Badiei</HeroH1>
                <HeroP>REACT DEVELOPER, WEB DESIGNER, JS DEVELOPER</HeroP>
                <HeroBtnWrapper>
                    <Button to="contact">Hire Me</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;