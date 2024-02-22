import { useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";

interface InfoProps {
    text: string;
}

const CircularInfo = ({ text }: InfoProps) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div
            className={`w-16 h-16 relative cursor-pointer`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="w-full h-full bg-[#DDDDDD] rounded-full flex items-center justify-center">
                {isHovered && (
                    <div className="absolute bg-gray-800 text-white text-sm p-2 rounded shadow-md bottom-full left-1/2 transform -translate-x-1/2">
                        {text}
                    </div>
                )}
                <FaInfoCircle className="text-gray-500" size={20} />
            </div>
        </div>
    );
};

export default CircularInfo;

