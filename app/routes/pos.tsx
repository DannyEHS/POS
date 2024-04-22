import { Outlet } from "@remix-run/react";
import Sidebar from "~/myComponents/SideBar";

const Pos = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="min-h-screen flex flex-grow justify-center bg-[#292929] w-auto mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Pos;
