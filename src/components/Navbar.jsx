import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <header className="w-full h-20 px-16 flex justify-between items-center border-b bg-white">
                <Link to={"/"} className="text-2xl cursor-pointer">
                    FretFlow
                </Link>
                <div className="flex items-center gap-6">
                    <a className="cursor-pointer">Why Practice?</a>

                    <Link
                        to={"/practice"}
                        className="px-4 py-2 border rounded-md"
                    >
                        Practice
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Navbar;
