import React from "react";
import {SidebarContainer,SidebarWrapper,SidebarMenu,SidebarLink,SidebarLinkR} from "./SidebarElements";

const SideBar = ({toggle , isOpen}) =>{
    return(
        <SidebarContainer onClick={toggle} isOpen={isOpen}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="about">About</SidebarLink>
                    <SidebarLink onClick={toggle} to="skills">Skills</SidebarLink>
                    <SidebarLink onClick={toggle} to="portfolio">Portfolio</SidebarLink>
                    <SidebarLink onClick={toggle} to="experience">Experience</SidebarLink>
                    <SidebarLink onClick={toggle} to="contact">Contact</SidebarLink>
                    <SidebarLinkR onClick={toggle} to="blog">Blog</SidebarLinkR>
                    <SidebarLinkR onClick={toggle} to="signin">Signin</SidebarLinkR>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;