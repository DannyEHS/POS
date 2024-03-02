import { useState, ChangeEvent } from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    inputClassName?: string;
    name?: string | undefined;
    value?: string | number | null | undefined;  
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, type, placeholder, inputClassName, name, onChange }: InputProps) => {
    const [inputValue, setInputValue] = useState(value || '');  // Usa un estado interno

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className={inputClassName}
            name={name}
            value={inputValue}
            onChange={handleChange}
        />
    );
}

export default Input;