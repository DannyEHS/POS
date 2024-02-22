import { ReactNode } from "react";

interface ComboBoxProps {
  //options?: string[] | any[];
  children?: ReactNode; // Agregando tipado para children
  comboClassName?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ComboBox = ({ children, comboClassName, onChange, name }: ComboBoxProps) => {
  return (
      <select
          className={comboClassName || 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
          onChange={onChange}
          name={name}
      >
        {children}
      </select>
  );
};

export default ComboBox;
