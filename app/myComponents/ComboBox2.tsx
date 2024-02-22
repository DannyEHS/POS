import { ReactNode } from "react";

// ComboBox2.tsx
interface ComboBoxProps {
  comboClassName: string;
  name: string;
  children?: ReactNode; // Agregando tipado para children
  //options: { id: string; nombre: string }[];
}

const ComboBox2 = ({ comboClassName, name, children } : ComboBoxProps) => {
  return (
    <select className={comboClassName} name={name}>
      {children}
    </select>
  );
};

export default ComboBox2;