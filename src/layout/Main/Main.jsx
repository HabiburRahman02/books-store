import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-red-200">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;