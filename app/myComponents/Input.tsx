import { ReactNode } from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    inputClassName?: string;
    name?: string | undefined;
    children?: ReactNode;
}

const Input = ({ children, type, placeholder, inputClassName, name } : InputProps) => {

    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className={inputClassName}
            name={name}
        >
            {children}
        </input>
        
    )

}

export default Input