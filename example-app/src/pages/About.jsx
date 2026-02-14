import { Link } from "react-router-dom";

function About() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Halaman About</h1>
            <p className="text-gray-600 mb-4">
                Aplikasi ini dibuat buat belajar React, React Router, dan
                Local Storage. That's basically it.
            </p>
            <Link
                to="/"
                className="text-blue-500 underline hover:text-blue-700">
                Back ke Home
            </Link>
        </div>
    );
}

export default About;
