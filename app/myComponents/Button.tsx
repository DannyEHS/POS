import { ReactNode } from "react";

interface ButtonProps {
    text: string;
    type: "submit" | "reset" | "button" | undefined;
    buttonClassName?: string;
    children?: ReactNode
}

const Button = ({ text, type, buttonClassName, children } : ButtonProps) => {
    return (
        <button type={type} className={buttonClassName}>
            {text}
            {children}
        </button>
    )
}

export default Button