import { Outlet } from "react-router-dom";
import { Menus } from "./pages/Menu"

export const Layout = () => {
    return (
        <>
            <Menus />
            <Outlet />
        </>
    );
};
