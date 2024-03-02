import{ useState, ChangeEvent } from "react";

interface TextAreaProps {
    type: string;
    placeholder?: string;
    textareaClassName?: string;
    name?: string | undefined;
    value?: string | number | null | undefined;  // Cambiado children por value
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ value, placeholder, textareaClassName, name, onChange }: TextAreaProps) => {
    const [textValue, setTextValue] = useState(value || '');  // Usa un estado interno

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <textarea
            rows={4}  // Puedes ajustar esto según sea necesario
            placeholder={placeholder}
            className={textareaClassName || 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
            name={name}
            value={textValue}
            onChange={handleChange}  // Proporciona una función onChange
        />
    );
}

export default TextArea;
