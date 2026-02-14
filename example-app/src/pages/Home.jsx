import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Halaman Home</h1>
            <p className="text-gray-600 mb-4">
                Welcome to aplikasi catatan!
            </p>
            <Link
                to="/about"
                className="text-blue-500 underline hover:text-blue-700">
                Ke halaman About
            </Link>
        </div>
    );
}

export default Home;
