interface ButtonProps {
    text: string;
    type: "submit" | "reset" | "button" | undefined;
    buttonClassName?: string;
}

const Button = ({ text, type, buttonClassName } : ButtonProps) => {
    return (
        <button type={type} className={buttonClassName}>
            {text}
        </button>
    )
}

export default Button