import { ReactNode } from "react";

interface TextAreaProps {
    type: string;
    placeholder?: string;
    textareaClassName?: string;
    name?: string | undefined;
    children?: ReactNode;
}

const TextArea = ({ children ,type, placeholder, textareaClassName, name } : TextAreaProps) => {

    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className={textareaClassName || 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
            name={name}
        >
            {children}
        </input>        
    )

}

export default TextArea