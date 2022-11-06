import styled from "styled-components";
import {BiTime} from "react-icons/bi";
import {FaRegCommentDots} from "react-icons/fa";
import {MdCastForEducation} from "react-icons/md";
import {TbWriting} from "react-icons/tb";
import {Link} from "react-router-dom";

export const InfoArticleContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? "#2f2e41" : "#f9f9f9")};
`

export const Icon = styled(Link)`
  position: absolute;
  left: 3%;
  top: 2%;
  color:${({lightBg}) => (lightBg ? "#f7f8fa" : "#2f2e41")} ;
  font-weight: 700;
  font-size: 30px;

  &:hover {
    transition: all .3s ease-in-out;
    color: #6c63ff;
  }

  @media screen and (max-width: 1100px){
    left: 1%;
  }
`


export const InfoArticleWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  
`


export const InfoDiv = styled.div`

`


export const ImgWrap = styled.div`
  
`


export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  box-shadow: 5px 8px 10px 3px rgba(0,0,0,.03);
  border-radius: 5px;
  max-height: 500px;
`


export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:${({lightBg}) => (lightBg ? "#f7f8fa" : "#2f2e41")} ;
`


export const ArticleHeading = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 35px;
  font-weight: 700;


  @media screen and (max-width: 617px){
    font-size: 30px;
  }
`


export const ArticleUl = styled.ul`
  display: flex;
  margin-bottom: 10px;

  @media screen and (max-width: 617px){
    flex-direction: column;
    font-size: 14px;
  }
`


export const ArticleLi = styled.li`
  list-style: none;
  display: flex;
  padding: 10px 15px;
  color: #a3a3a3;

  @media screen and (max-width: 617px){
    padding: 5px 0;
  }
`


export const Icon1 = styled(BiTime)`
    margin-right: 5px;
`


export const Icon2 = styled(TbWriting)`
  margin-right: 5px;
`


export const Icon3 = styled(MdCastForEducation)`
  margin-right: 5px;
`


export const Icon4 = styled(FaRegCommentDots)`
  margin-right: 5px;
`


export const ArticleSpan = styled.span`

`


export const ArticleP = styled.p`
  font-size: 15px;
  line-height: 1.3;
  margin-bottom: 50px;
`