interface TextProps {
    text: string;
}

const PrimaryTitle = ({ text } : TextProps) => {
    return (
        <h1 className="text-[#252525] text-2xl font-bold mb-4">
            {text}
        </h1>
    )
}

export default PrimaryTitle