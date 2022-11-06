import React from "react";
import {Button} from "../ButtonElements";
import {
    InfoContainer,
    Icon,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrapper,
    Column2,
    ImgWrap,
    Img
} from "./BlogInfoElements";
import {TiArrowBack} from "react-icons/ti";
import {useNavigate} from "react-router-dom";


const BlogPageInfo = ({lightBg, topLine, heading, description, buttonLabel, imgStart, img, alt, primary, dark , imgInside}) => {
    const navigate = useNavigate();


    function handleChange() {
        let slug = heading.replace(/ /g, "-");
        navigate(slug)
    }

    return (
        <InfoContainer lightBg={lightBg}>
            <Icon to="/"><TiArrowBack/></Icon>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightBg={lightBg}>{heading}</Heading>
                            <Subtitle lightBg={lightBg}>{description}</Subtitle>
                            <BtnWrapper>
                                <Button primary="true" to="" onClick={handleChange}>{buttonLabel}</Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>

    )
}

export default BlogPageInfo;