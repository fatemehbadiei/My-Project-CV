import React from "react";
import BlogPageInfo from "../Components/Blog";
import {articles} from "../Components/Blog/Data";



const BlogPage = () => {
    return(
        <>
            {articles.map((article , index)=><BlogPageInfo {...article} key={index}/>)}
        </>
    )
}

export default BlogPage;