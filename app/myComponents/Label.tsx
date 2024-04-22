interface TextProps {
    text: string;
    labelClassName: string;
}

const Label = ({ text, labelClassName } : TextProps) => {
    return (
        <label className={labelClassName}>
            {text}
        </label>
    )
}

export default Label