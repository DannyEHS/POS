interface InputProps {
    type: string;
    placeholder?: string;
    inputClassName?: string;
    name?: string | undefined;
}

const Input = ({ type, placeholder, inputClassName, name } : InputProps) => {

    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className={inputClassName}
            name={name}
        />
        
    )

}

export default Input