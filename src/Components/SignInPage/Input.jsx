import React from "react";


const Input = ({id,label,type,value,onchange,text,className,error})=>{
    return(
        <>
            <div className="divSign">
                <input type={type} id={id} value={value} onChange={onchange} placeholder={text} className={className}/>
                <label htmlFor={id}>{label}</label>
            </div>
            <div style={{height:"10px"}}>
                {error && <div className="errorH6">{error}</div>}
            </div>
        </>
    )
}

export default Input;