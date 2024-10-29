import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
    return (
        <>
            <div className="h-full flex flex-col bg-neutral-100">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default Root;
