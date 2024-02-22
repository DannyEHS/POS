import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaShoppingBag } from "react-icons/fa";
import { HiTableCells } from "react-icons/hi2";
import { FaCog } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div className="bg-[#F7F7F7] w-40 p-4 min-h-screen">
      <ul className="space-y-2">
        <li className="flex items-center">
          <MdSpaceDashboard className="text-black hover:text-gray-500 mr-2 flex-shrink-0" />
          <Link to="/pos/dashboard" className="text-[#252525] hover:text-gray-500">
            Dashboard
          </Link>
        </li>
        <li className="flex items-center">
        <FaShoppingBag className="text-black hover:text-gray-500 mr-2 flex-shrink-0" />
          <Link to="/pos/ventas" className="text-[#252525] hover:text-gray-500">Ventas</Link>
        </li>
        <li className="flex items-center">
        <HiTableCells className="text-black hover:text-gray-500 mr-2 flex-shrink-0" />
          <Link to="/pos/inventario" className="text-[#252525] hover:text-gray-500">Inventario</Link>
        </li>
        <li className="flex items-center">
        <FaCog className="text-black hover:text-gray-500 mr-2 flex-shrink-0" />
          <Link to="/pos/administracion" className="text-[#252525] hover:text-gray-500">Administración</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;



