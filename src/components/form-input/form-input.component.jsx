import React from 'react';

const FormInput = ({type , placeholder , name , children}) => {
    return(
        <>
            {type !== 'textarea'
                ?<input name={name} type={type} placeholder={placeholder} className="form-input" />    
                : (
                    <textarea name={name} placeholder={placeholder} id="" cols="30" rows="10" className="form-input">
                        {children}
                    </textarea>
                )
            }
        </>
    )
}

export default FormInput;