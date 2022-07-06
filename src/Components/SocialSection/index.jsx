import React from "react";
import {FaGithub, FaGoogle, FaInstagram, FaTelegram} from "react-icons/fa";
import {SocialContainer,SocialWrapper,ButtonContainer,SocialLinks} from "./SocialSection";

const SocialSection = () =>{
    return(
        <SocialContainer>
            <SocialWrapper>
                <ButtonContainer>
                    <SocialLinks href="https://github.com/fatemehbadiei" target="_blank">
                        <FaGithub/>
                    </SocialLinks>
                    <SocialLinks href="https://t.me/Fatemeh_Badiei" target="_blank">
                        <FaTelegram/>
                    </SocialLinks>
                    <SocialLinks href="mailto: fatemehbadiei1995@gmail.com" target="_blank">
                        <FaGoogle/>
                    </SocialLinks>
                    <SocialLinks href="https://www.instagram.com/fatemeh_badiei_/" target="_blank">
                        <FaInstagram/>
                    </SocialLinks>
                </ButtonContainer>
            </SocialWrapper>
        </SocialContainer>
    )
}

export default SocialSection;