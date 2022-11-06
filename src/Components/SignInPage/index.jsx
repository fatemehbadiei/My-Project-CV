import React from "react";
import "./SignInElements.css";
import {Link} from "react-router-dom";
import {TiArrowBack} from "react-icons/ti";
import {Icon} from "../ArticlesInfo/ArticlesElements";
import Joi from "joi";
import Form from "./Form";

class SignInPage extends Form {

    state = {
        account: {username: "", password: ""},
        errors: {}
    };

    schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .messages({
                "string.empty": "Username is empty",
                "string.min": "Username must be minimum 3 character",
                "string.max": "Username must be maximum 30 character",
                "string.alphanum": "Username must be in English"
            }),
        password: Joi.string()
            .min(8)
            .max(25)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/,
                'password')
            .required()
            .messages({
                "string.empty": "Password is empty",
                "string.min": "Password must be minimum 8 character",
                "string.max": "Password must be maximum 25 character",
                "string.pattern.name": "Password don't match with pattern"
            }),
    });

    doSubmit = () => {
        console.log("Submitted");
    }

    render() {
        return (
            <div className="containerSign">
                <Icon to="/"><TiArrowBack/></Icon>
                <div className="wrapperSign">
                    <div className="rowSign">
                        <div className="column1Sign">
                            <img src={require("../../Images/picture.svg").default} alt=""/>
                        </div>
                        <div className="column2Sign">
                            <div className="boxOfFormSign">
                                <form onSubmit={this.handleSubmit} action="" className="formSign">
                                    <h1 className="headerSign">Login</h1>
                                    {this.renderInput("username", "Username", "text", "inputSign")}
                                    {this.renderInput("password", "Password", "password", "inputSign")}
                                    <div className="checkRowSign">
                                        {this.renderInput("check", "", "checkbox", "checkboxSign", "Remember me!")}
                                        <Link to="#" className="linkForgetSign">Forgot password?</Link>
                                    </div>
                                    {this.renderButton("LOGIN")}
                                </form>
                            </div>
                            <div className="signupSign">New here?<Link to="#" className="linkSignUpSign">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default SignInPage;