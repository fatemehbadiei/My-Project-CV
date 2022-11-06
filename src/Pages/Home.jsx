import React,{useState} from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import HeroSection from "../Components/HeroSection";
import SocialSection from "../Components/SocialSection";
import InfoCardSection from "../Components/InfoCardSection";
import SkillCardSection from "../Components/SkillCardSection";
import WorkExperience from "../Components/WorkExperience";
import {ExperienceObj} from "../Components/WorkExperience/Data";
import PortfolioSection from "../Components/PortfolioSection";
import ContactSection from "../Components/ContactSection";


const Home = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle} isOpen={isOpen}/>
            <HeroSection/>
            <SocialSection/>
            <InfoCardSection/>
            <SkillCardSection/>
            <PortfolioSection/>
            <WorkExperience {...ExperienceObj}/>
            <ContactSection/>
        </>
    )
}

export default Home;