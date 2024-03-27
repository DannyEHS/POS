import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
    text: string;
    name?: string;
    value?: string;
    type: "submit" | "reset" | "button" | undefined;
    buttonClassName?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

const Button = ({ text, type, buttonClassName, onClick, children, name, value }: ButtonProps) => {
    return (
        <button value={value} name={name} type={type} className={buttonClassName} onClick={onClick}>
            {text}
            {children}
        </button>
    );
}

export default Button;

