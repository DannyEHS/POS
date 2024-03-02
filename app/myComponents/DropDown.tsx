import  { ReactNode, useState } from "react";

interface DropDownProps {
  text: string;
  dropDownClassName?: string;
  children?: ReactNode
}

const DropDown = ({ text, dropDownClassName, children }: DropDownProps) => {
  const [isOpen, setContent] = useState(false);

  const toggleMenu = () => {
    setContent(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl ${dropDownClassName}`}
        onClick={toggleMenu}
      >
        {text}
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 bg-white border rounded shadow mt-2 z-10">
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">
            {children}
            </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
