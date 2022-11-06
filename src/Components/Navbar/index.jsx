import React,{useState,useEffect} from "react";
import {Nav,NavContainer,NavHeader,NavLogo,MobileIcon,MenuIcon,CloseIcon,NavMenu,NavItem,NavLink,NavLink1,Button} from "./NavbarElements";
import {animateScroll as scroll} from "react-scroll";

const Navbar = ({toggle,isOpen}) => {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav =()=>{
        if (window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",changeNav);
    },[]);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Nav scrollNav={scrollNav}>
            <NavContainer>
                <NavHeader isOpen={isOpen}>
                    <NavLogo to="/" onClick={toggleHome}>
                        CV
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon isOpen={isOpen}/>
                        <CloseIcon isOpen={isOpen}/>
                    </MobileIcon>
                </NavHeader>
                <NavMenu>
                    <NavItem>
                        <NavLink to="about" smooth={true} duration={500} spy={true} offset={-80}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="skills" smooth={true} duration={500} spy={true} offset={-80}>Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="portfolio" smooth={true} duration={500} spy={true} offset={-80}>Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="experience" smooth={true} duration={500} spy={true} offset={-80}>Experience</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="contact" smooth={true} duration={500} spy={true} offset={-80}>Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink1 to="blog">Blog</NavLink1>
                    </NavItem>
                    <NavItem>
                        <Button to="signin">Signin</Button>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar;