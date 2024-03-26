import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
    text: string;
    name?: string;
    type: "submit" | "reset" | "button" | undefined;
    buttonClassName?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

const Button = ({ text, type, buttonClassName, onClick, children, name }: ButtonProps) => {
    return (
        <button name={name} type={type} className={buttonClassName} onClick={onClick}>
            {text}
            {children}
        </button>
    );
}

export default Button;

