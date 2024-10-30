import { Link } from "react-router-dom";

function IndexPage() {
    return (
        <main className="mt-16 px-56">
            <h2 className="text-3xl">How It Works</h2>
            <p></p>
            <h2 className="text-3xl">Timeline</h2>
            <p>O-o-o-o-o</p>
            <h2 className="text-3xl">Select What To Practice</h2>
            <ul className="my-8 flex gap-10">
                <Link
                    to={"/practice"}
                    className="w-24 h-16 flex justify-center items-center border rounded-md shadow-md bg-white"
                >
                    <h5>Lav E-streng</h5>
                </Link>
            </ul>
        </main>
    );
}

export default IndexPage;
