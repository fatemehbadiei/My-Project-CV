import React, {useEffect} from "react";
import {
    WorkContainer,
    WorkWrapper,
    WorkH4,
    WorkExperienceContainer,
    WorkExperienceRow,
    WorkDivFirst,
    WorkCardSmall,
    WorkCardP,
    WorkCardH5,
    WorkDivSecond,
    WorkCardBody,
    CardHeader,
    CardBodyP
} from "./WorkElements"
import AOS from "aos";

const WorkExperience = ({
                            id,
                            details1,
                            companyName1,
                            heading1,
                            description1,
                            details2,
                            companyName2,
                            heading2,
                            description2,
                            details3,
                            companyName3,
                            heading3,
                            description3
                        }) => {

    useEffect(() => {
        AOS.init({
            duration: 500
        });
        window.addEventListener('load', AOS.refresh());
    }, []);


    return (
        <WorkContainer id={id}>
            <WorkWrapper>
                <WorkH4>Work Experience</WorkH4>
                <WorkExperienceContainer>
                    <WorkExperienceRow>
                        <WorkDivFirst data-aos="fade-right">
                            <WorkCardSmall>
                                <WorkCardP>{details1}</WorkCardP>
                                <WorkCardH5>{companyName1}</WorkCardH5>
                            </WorkCardSmall>
                        </WorkDivFirst>
                        <WorkDivSecond data-aos="fade-left">
                            <WorkCardBody>
                                <CardHeader>{heading1}</CardHeader>
                                <CardBodyP>{description1}</CardBodyP>
                            </WorkCardBody>
                        </WorkDivSecond>
                    </WorkExperienceRow>
                </WorkExperienceContainer>
                <WorkExperienceContainer>
                    <WorkExperienceRow>
                        <WorkDivFirst data-aos="fade-right">
                            <WorkCardSmall>
                                <WorkCardP>{details2}</WorkCardP>
                                <WorkCardH5>{companyName2}</WorkCardH5>
                            </WorkCardSmall>
                        </WorkDivFirst>
                        <WorkDivSecond data-aos="fade-left">
                            <WorkCardBody>
                                <CardHeader>{heading2}</CardHeader>
                                <CardBodyP>{description2}</CardBodyP>
                            </WorkCardBody>
                        </WorkDivSecond>
                    </WorkExperienceRow>
                </WorkExperienceContainer>
                <WorkExperienceContainer>
                    <WorkExperienceRow>
                        <WorkDivFirst data-aos="fade-right">
                            <WorkCardSmall>
                                <WorkCardP>{details3}</WorkCardP>
                                <WorkCardH5>{companyName3}</WorkCardH5>
                            </WorkCardSmall>
                        </WorkDivFirst>
                        <WorkDivSecond data-aos="fade-left">
                            <WorkCardBody>
                                <CardHeader>{heading3}</CardHeader>
                                <CardBodyP>{description3}</CardBodyP>
                            </WorkCardBody>
                        </WorkDivSecond>
                    </WorkExperienceRow>
                </WorkExperienceContainer>
            </WorkWrapper>
        </WorkContainer>
    )
}

export default WorkExperience;