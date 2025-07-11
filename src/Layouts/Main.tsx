import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "./Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;