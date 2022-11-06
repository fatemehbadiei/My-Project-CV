import React, {Component} from "react";
import Joi from "joi";
import Input from "./Input";

class Form extends Component{

    state ={
        account: {},
        errors: {}
    };

    validate = () => {
        const result = this.schema.validate(this.state.account, {abortEarly: false})
        // console.log(result.error.details.map(errDetail => errDetail.type), result.error);
        if (!result.error) return null;
        const errors = {};
        for (const item of result.error.details) {
            errors[item.path[0]] = item.message
        }
        return errors;
    }

    validateProperty = ({id, value}) => {
        const schemaObj = {};
        for (const item of this.schema._ids._byKey.entries()) {
            schemaObj[item[1].id] = item[1].schema
        }
        const obj = {[id]: value};
        const subSchema = Joi.object({[id]: schemaObj[id]});
        const {error} = subSchema.validate(obj);
        return error ? error.details[0].message : null
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({...this.state, errors: errors || {}});
        if (errors) return

        this.doSubmit()
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.id] = errorMessage
        else delete errors[input.id]

        const account = {...this.state.account};
        account[input.id] = input.value;
        this.setState({...this.state, account, errors});
    }

    renderInput(id,text,type = "text",className,label){
        const {account , errors} = this.state
        return(
            <Input
                id={id}
                value={account[id]}
                onchange={this.handleChange}
                type={type}
                error={errors[id]}
                text={text}
                className={className}
                label={label}
            />
        )
    }

    renderButton (label){
        return (
            <button disabled={this.validate()} type="submit" className="btnSign">{label}</button>
        )
    }


}

export default Form;