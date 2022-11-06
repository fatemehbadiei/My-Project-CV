import React, {useState,useEffect} from "react";
import {
    PortfolioContainer,
    PortfolioWrapper,
    PortfolioRow,
    PortfolioCol,
    PortfolioH4,
    PortfolioNav,
    PortfolioUl,
    PortfolioLi,
    PortFolioLink,
    Icon1,
    Icon2,
    Icon3,
    PortfolioTabs,
    PortfolioTabOne,
    PortfolioTabTwo,
    PortfolioTabThree,
    PortfolioTabWrapper,
    PortfolioTabRow,
    PortfolioTabCol1,
    PortfolioTabCol2,
    PortfolioTabDiv,
    PortfolioTabLink,
    PortFolioTabImg,
    PortfolioCaption,
    CaptionH4,
    CaptionP
} from "./PortfolioElements";

import Image1 from "../../Images/image2.png";
import Image2 from "../../Images/image6.png";
import Image3 from "../../Images/image3.png";
import Image4 from "../../Images/image4.png";
import Image5 from "../../Images/image5.png";
import Image6 from "../../Images/image7.png";
import Image7 from "../../Images/image6.png";
import Image8 from "../../Images/image8.png";
import Image9 from "../../Images/image9.png";
import Image10 from "../../Images/image10.png";
import Image11 from "../../Images/image11.png";
import Image12 from "../../Images/image12.png";
import AOS from "aos";
// window.AOS = AOS;


const PortfolioSection = () => {

    const [state,setState] = useState({
        showTab1:true,
        showTab2:false,
        showTab3:false
    })

    const ChangeTab1 = () =>{
        setState({...state , showTab1: true , showTab2: false , showTab3: false})
    }

    const ChangeTab2 = () =>{
        setState({...state , showTab2: true , showTab1: false , showTab3: false})
    }

    const ChangeTab3 = () =>{
        setState({...state , showTab3: true , showTab1: false , showTab2: false})
    }

    useEffect(() => {
        AOS.init({
            duration: 500
        });
        window.addEventListener('load', AOS.refresh());
    }, []);


    return (
        <PortfolioContainer id="portfolio">
            <PortfolioWrapper>
                <PortfolioRow>
                    <PortfolioCol>
                        <PortfolioH4>Portfolio</PortfolioH4>
                        <PortfolioNav>
                            <PortfolioUl>
                                <PortfolioLi onClick={ChangeTab1}>
                                    <PortFolioLink to="/" isActive={state.showTab1}><Icon1/></PortFolioLink>
                                </PortfolioLi>
                                <PortfolioLi onClick={ChangeTab2}>
                                    <PortFolioLink to="/" isActive={state.showTab2}><Icon2/></PortFolioLink>
                                </PortfolioLi>
                                <PortfolioLi onClick={ChangeTab3}>
                                    <PortFolioLink to="/" isActive={state.showTab3}><Icon3/></PortFolioLink>
                                </PortfolioLi>
                            </PortfolioUl>
                        </PortfolioNav>
                    </PortfolioCol>
                </PortfolioRow>
                <PortfolioTabs>
                    <PortfolioTabOne style={ state.showTab1 ? { } : {display:'none'}}>
                        <PortfolioTabWrapper>
                            <PortfolioTabRow>
                                <PortfolioTabCol1>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/Project-Week-3-Site" target="_blank">
                                            <PortFolioTabImg src={Image1}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Web Development</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/project-fidibo" target="_blank">
                                            <PortFolioTabImg src={Image2}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Fidibo</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                </PortfolioTabCol1>
                                <PortfolioTabCol2>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/projects-of-javascript-course/tree/main/project-shopping_cart" target="_blank">
                                            <PortFolioTabImg src={Image3}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Shopping Cart</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/Project-rock-paper" target="_blank">
                                            <PortFolioTabImg src={Image4}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Rock Paper</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                </PortfolioTabCol2>
                            </PortfolioTabRow>
                        </PortfolioTabWrapper>
                    </PortfolioTabOne>
                    <PortfolioTabTwo  style={ state.showTab2 ? { } : {display:'none'}}>
                        <PortfolioTabWrapper>
                            <PortfolioTabRow>
                                <PortfolioTabCol1>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/Project-crypto-currancy" target="_blank">
                                            <PortFolioTabImg src={Image5}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Crypto Currency</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/Project-name-generator" target="_blank">
                                            <PortFolioTabImg src={Image6}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Name Generator</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                </PortfolioTabCol1>
                                <PortfolioTabCol2>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/WeeklyBudget_project" target="_blank">
                                            <PortFolioTabImg src={Image7}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project WeeklyBudget</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/Insurance_project" target="_blank">
                                            <PortFolioTabImg src={Image8}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Insurance</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                </PortfolioTabCol2>
                            </PortfolioTabRow>
                        </PortfolioTabWrapper>
                    </PortfolioTabTwo>
                    <PortfolioTabThree  style={ state.showTab3 ? { } : {display:'none'}}>
                        <PortfolioTabWrapper>
                            <PortfolioTabRow>
                                <PortfolioTabCol1>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/Projects-of-bootstrap/tree/main/project-bootstrap-1(big)" target="_blank">
                                            <PortFolioTabImg src={Image9}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Bootstrap-1</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/Projects-of-bootstrap/tree/main/project-bootstrap-2(big)" target="_blank">
                                            <PortFolioTabImg src={Image10}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Bootstrap-2</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                </PortfolioTabCol1>
                                <PortfolioTabCol2>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/projects-of-javascript-course/tree/main/project-browser-notepadd" target="_blank">
                                            <PortFolioTabImg src={Image11}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Browser Notepadd</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                    <PortfolioTabDiv data-aos="fade-up">
                                        <PortfolioTabLink href="https://github.com/fatemehbadiei/projects-of-javascript-course/tree/main/project-sending-Email" target="_blank">
                                            <PortFolioTabImg src={Image12}/>
                                            <PortfolioCaption>
                                                <CaptionH4>Recent Project</CaptionH4>
                                                <CaptionP>Project Sending Email</CaptionP>
                                            </PortfolioCaption>
                                        </PortfolioTabLink>
                                    </PortfolioTabDiv>
                                </PortfolioTabCol2>
                            </PortfolioTabRow>
                        </PortfolioTabWrapper>
                    </PortfolioTabThree>
                </PortfolioTabs>
            </PortfolioWrapper>
        </PortfolioContainer>
    )
}

export default PortfolioSection;