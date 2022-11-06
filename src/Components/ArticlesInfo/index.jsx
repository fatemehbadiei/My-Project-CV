import React from "react";
import {useParams} from "react-router-dom";
import {articles} from "../Blog/Data";
import {InfoArticleContainer,Icon,InfoArticleWrapper,InfoDiv,ImgWrap,Img,InfoSection,ArticleHeading,ArticleUl,ArticleLi,ArticleSpan,ArticleP,Icon1,Icon2,Icon3,Icon4} from "./ArticlesElements";
import {TiArrowBack} from "react-icons/ti";



const ArticleInfo = () => {
    const {heading} = useParams();
    const article = articles.find((article) => {
        if (article.heading.replace(/ /g, "-") === heading) {
            return article
        }
    })
    return (
        // <div>
        //     <img src={require(`../../${article.imgInside}`)} alt="" width="100%" height="500px"/>
        //     <h1>{article.heading}</h1>
        //     <p>{article.description}</p>
        // </div>

        <InfoArticleContainer lightBg={article.lightBg}>
            <Icon lightBg={article.lightBg} to="/blog"><TiArrowBack/></Icon>
            <InfoArticleWrapper>
                <InfoDiv>
                    <ImgWrap>
                        <Img src={require(`../../${article.imgInside}`)} alt=""/>
                    </ImgWrap>
                    <InfoSection lightBg={article.lightBg}>
                        <ArticleHeading>{article.heading}</ArticleHeading>
                        <ArticleUl>
                            <ArticleLi>
                                <Icon1/>
                                <ArticleSpan>{article.time}</ArticleSpan>
                            </ArticleLi>
                            <ArticleLi>
                                <Icon2/>
                                <ArticleSpan>{article.writer}</ArticleSpan>
                            </ArticleLi>
                            <ArticleLi>
                                <Icon3/>
                                <ArticleSpan>{article.type}</ArticleSpan>
                            </ArticleLi>
                            <ArticleLi>
                                <Icon4/>
                                <ArticleSpan>{article.numberComment}</ArticleSpan>
                            </ArticleLi>
                        </ArticleUl>
                        <ArticleP>{article.description}{article.allDescription}</ArticleP>
                    </InfoSection>
                </InfoDiv>
            </InfoArticleWrapper>
        </InfoArticleContainer>

    )
}

export default ArticleInfo;