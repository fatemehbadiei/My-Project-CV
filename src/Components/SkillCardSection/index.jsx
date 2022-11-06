import React, {useEffect, useState} from "react";
import {
    SkillCardContainer,
    SkillCardWrapper,
    SkillCardH4,
    SkillCard,
    SkillCardBody,
    SkillCardRow,
    SkillCardLang,
    SkillLangContainer,
    SkillCardDiv,
    SkillCardSpan,
    SkillCardDivProgress,
    SkillCardProgress1,
    SkillCardProgress2,
    SkillCardProgress3,
    SkillCardProgress4,
    SkillCardProgress5,
    SkillCardProgress6,
} from "./SkillSectionElements";
import AOS from "aos";

const SkillCardSection = () => {


    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 600) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        window.addEventListener('load', AOS.refresh());
    }, []);


    return (
        <SkillCardContainer id="skills">
            <SkillCardWrapper>
                <SkillCardH4>Professional Skills</SkillCardH4>
                <SkillCard data-aos="fade-up">
                    <SkillCardBody>
                        <SkillCardRow>
                            <SkillCardLang>
                                <SkillLangContainer>
                                    <SkillCardDiv>
                                        <SkillCardSpan>Html</SkillCardSpan>
                                        <SkillCardSpan>80%</SkillCardSpan>
                                    </SkillCardDiv>
                                    <SkillCardDivProgress>
                                        <SkillCardProgress1 scrollNav={scrollNav}></SkillCardProgress1>
                                    </SkillCardDivProgress>
                                </SkillLangContainer>
                            </SkillCardLang>
                            <SkillCardLang>
                                <SkillLangContainer>
                                    <SkillCardDiv>
                                        <SkillCardSpan>Css</SkillCardSpan>
                                        <SkillCardSpan>85%</SkillCardSpan>
                                    </SkillCardDiv>
                                    <SkillCardDivProgress>
                                        <SkillCardProgress2 scrollNav={scrollNav}></SkillCardProgress2>
                                    </SkillCardDivProgress>
                                </SkillLangContainer>
                            </SkillCardLang>
                        </SkillCardRow>
                        <SkillCardRow>
                            <SkillCardLang>
                                <SkillLangContainer>
                                    <SkillCardDiv>
                                        <SkillCardSpan>JavaScript</SkillCardSpan>
                                        <SkillCardSpan>80%</SkillCardSpan>
                                    </SkillCardDiv>
                                    <SkillCardDivProgress>
                                        <SkillCardProgress3 scrollNav={scrollNav}></SkillCardProgress3>
                                    </SkillCardDivProgress>
                                </SkillLangContainer>
                            </SkillCardLang>
                            <SkillCardLang>
                                <SkillLangContainer>
                                    <SkillCardDiv>
                                        <SkillCardSpan>Sass</SkillCardSpan>
                                        <SkillCardSpan>70%</SkillCardSpan>
                                    </SkillCardDiv>
                                    <SkillCardDivProgress>
                                        <SkillCardProgress4 scrollNav={scrollNav}></SkillCardProgress4>
                                    </SkillCardDivProgress>
                                </SkillLangContainer>
                            </SkillCardLang>
                        </SkillCardRow>
                        <SkillCardRow>
                            <SkillCardLang>
                                <SkillLangContainer>
                                    <SkillCardDiv>
                                        <SkillCardSpan>BootStrap</SkillCardSpan>
                                        <SkillCardSpan>85%</SkillCardSpan>
                                    </SkillCardDiv>
                                    <SkillCardDivProgress>
                                        <SkillCardProgress5 scrollNav={scrollNav}></SkillCardProgress5>
                                    </SkillCardDivProgress>
                                </SkillLangContainer>
                            </SkillCardLang>
                            <SkillCardLang>
                                <SkillLangContainer>
                                    <SkillCardDiv>
                                        <SkillCardSpan>React</SkillCardSpan>
                                        <SkillCardSpan>70%</SkillCardSpan>
                                    </SkillCardDiv>
                                    <SkillCardDivProgress>
                                        <SkillCardProgress6 scrollNav={scrollNav}></SkillCardProgress6>
                                    </SkillCardDivProgress>
                                </SkillLangContainer>
                            </SkillCardLang>
                        </SkillCardRow>
                    </SkillCardBody>
                </SkillCard>
            </SkillCardWrapper>
        </SkillCardContainer>
    )
}

export default SkillCardSection;